import firebase from "firebase";
import {v4 as uuidv4} from 'uuid';

export function getDownloadLinkAndMetadata(path) {
    return new Promise(async (resolve, reject) => {
        let file = {}
        const getFileDownloadLink = await firebase
            .storage()
            .ref()
            .child(path)
            .getDownloadURL()
            .then((res) => {
                return {
                    success: true,
                    data: res
                }
            })
            .catch((err) => {
                return {
                    success: false,
                    message: err
                }
            })

        const getFileMetadata = await firebase
            .storage()
            .ref()
            .child(path)
            .getMetadata()
            .then((res) => {
                return {
                    success: true,
                    data: res
                }
            })
            .catch((err) => {
                return {
                    success: false,
                    message: err
                }
            });

        if (await getFileDownloadLink.success && await getFileMetadata.success) {
            return resolve({
                success: true,
                downloadLink: getFileDownloadLink.data,
                metaData: getFileMetadata.data
            })

        } else {
            return resolve({
                success: false,
                message: getFileDownloadLink.success ? getFileMetadata.message : getFileDownloadLink.message
            })
        }
    })

}


export async function uploadFileToStorage(file, fileID,  currentPath) {
    return new Promise(async (resolve, reject) => {
        let storageRef = firebase.storage().ref( currentPath + fileID)
        storageRef
            .put(file)
            .then(async (snapshot) => {
                resolve({
                    success: true,
                })
            })
            .catch(err => {
                console.log(err)
                resolve({
                    success: false,
                    message: err.message
                })
            });
    })
}

export async function onUploadFile(files, currentPath) {
    return new Promise(async (resolve, reject) => {
        let allPromise = []
        let allNewFile = []
        console.log(files)
        files.map(item => {
            allPromise.push(
                new Promise(async (resolve1, reject) => {
                    const key = item.id
                    // const file = file.file
                    if (typeof item !== 'undefined') {
                        const fileKey = uuidv4()
                        const fileName = item.name
                        const fileType = fileName.split('.')[fileName.split('.').length - 1]
                        const fileID = fileKey + '.' + fileType
                        /**
                         *  if type support Image Thumbnail
                         */

                            const uploadFileState = await uploadFileToStorage(item, fileID,  currentPath + "/")
                            if ( uploadFileState.success) {
                                //get the download link
                                const getImageState = await getDownloadLinkAndMetadata(currentPath + "/" + fileID)
                                if (getImageState.success) {
                                    //filesize  = image size + thumbnail size
                                    const fileSize = getImageState.metaData.size
                                     allNewFile.push({
                                        createDate: new Date(),
                                        fileName: fileName,
                                        fileSize: fileSize,
                                        id: fileKey,
                                        path: currentPath,
                                        type:"file",
                                        success: true,
                                        url: getImageState.downloadLink
                                    })
                                    resolve1()

                                }
                            } else {
                                resolve1({
                                    success: false,
                                    message: 'error in uploading'
                                })
                            }


                    } else {
                        resolve1({
                            success: false,
                            message: 'error in uploading'
                        })
                    }
                })
            )
        })

        Promise.all(allPromise)
            .then(res => {
                console.log(allNewFile)
                resolve({
                    success: true,
                    data: allNewFile
                })
            })
    })

}
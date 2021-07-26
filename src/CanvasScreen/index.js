import React, { Component } from 'react';
import {
    ActivityIndicator,
    Text,
    View,
    PermissionsAndroid,
    Platform,

} from 'react-native';

import styles from './styles';
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
// Import RNFetchBlob for the file download
import RNFetchBlob from 'rn-fetch-blob';


export default class CanvasScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoading: true,
            items: []
        }
    }

    componentDidMount() {
        const { imageUrl } = this.props.route.params;
        console.log(imageUrl)
        this.saveImageToLocalStorage();
    }

    checkPermission = async () => {
        // Function to check the platform
        // If iOS then start downloading
        // If Android then ask for permission

        if (Platform.OS === 'ios') {
            downloadImage();
        } else {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Storage Permission Required',
                        message:
                            'App needs access to your storage to download Photos',
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    // Once user grant the permission start downloading
                    console.log('Storage Permission Granted.');
                    this.downloadImage();
                } else {
                    // If permission denied then show alert
                    alert('Storage Permission Not Granted');
                }
            } catch (err) {
                // To handle permission related exception
                console.warn(err);
            }
        }
    };

    downloadImage = () => {
        // Main function to download the image

        // To add the time suffix in filename
        let date = new Date();
        // Image URL which we want to download
        const { imageUrl } = this.props.route.params;
        let image_URL = imageUrl;

        // Get config and fs from RNFetchBlob
        // config: To pass the downloading related options
        // fs: Directory path where we want our image to download
        const { config, fs } = RNFetchBlob;
        let PictureDir = fs.dirs.PictureDir;
        let options = {
            fileCache: true,
            addAndroidDownloads: {
                // Related to the Android only
                useDownloadManager: true,
                notification: true,
                path:
                    PictureDir +
                    '/RNSketchCanvas/image_' +
                    Math.floor(date.getTime() + date.getSeconds() / 2),
                // ext,
                description: 'Image',
            },
        };

        this.imageName = options.addAndroidDownloads.path;
        console.log(this.imageName)

        config(options)
            .fetch('GET', image_URL)
            .then(res => {
                // Showing alert after successful downloading
                console.log('res -> ', JSON.stringify(res));
                this.setState({
                    isLoading: false,
                })
                // alert('Image Downloaded Successfully.');
            });
    };

    saveImageToLocalStorage = () => {
        console.log("start saving")

        this.checkPermission();

        console.log("end saving")
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.preloader}>
                    <ActivityIndicator size='large' color="#9E9E9E" />
                </View>
            )
        }
        else {
            return (
                <View style={styles.container}>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <RNSketchCanvas
                            containerStyle={{ backgroundColor: 'transparent', flex: 1 }}
                            canvasStyle={{ backgroundColor: 'transparent', flex: 1 }}
                            defaultStrokeIndex={0}
                            defaultStrokeWidth={5}
                            localSourceImage={
                                {
                                    // filename: '/storage/emulated/0/Pictures/image.png',
                                    filename: this.imageName,
                                    directory: '',
                                    mode: 'AspectFill',
                                }
                            }
                            closeComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Close</Text></View>}
                            undoComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Undo</Text></View>}
                            clearComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Clear</Text></View>}
                            eraseComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Eraser</Text></View>}
                            strokeComponent={color => (
                                <View style={[{ backgroundColor: color }, styles.strokeColorButton]} />
                            )}
                            strokeSelectedComponent={(color, index, changed) => {
                                return (
                                    <View style={[{ backgroundColor: color, borderWidth: 2 }, styles.strokeColorButton]} />
                                )
                            }}
                            strokeWidthComponent={(w) => {
                                return (<View style={styles.strokeWidthButton}>
                                    <View style={{
                                        backgroundColor: 'white', marginHorizontal: 2.5,
                                        width: Math.sqrt(w / 3) * 10, height: Math.sqrt(w / 3) * 10, borderRadius: Math.sqrt(w / 3) * 10 / 2
                                    }} />
                                </View>
                                )
                            }}
                            saveComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Save</Text></View>}
                            savePreference={() => {
                                return {
                                    folder: 'RNSketchCanvas',
                                    // filename: String(Math.ceil(Math.random() * 100000000)),
                                    filename: 'image',
                                    transparent: false,
                                    imageType: 'png'
                                }
                            }}
                            onSketchSaved={(success, filePath) => { alert('filePath: ' + filePath); }}
                        />
                    </View>

                </View>
            );
        }

        // return (
        //     <ImageBackground source={require('../../images/bgsplash.png')} style={styles.main} >
        //         <View style={styles.container}>

        //         </View>
        //     </ImageBackground>
        // );
    }
}
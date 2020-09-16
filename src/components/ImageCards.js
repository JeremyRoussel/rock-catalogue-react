// ./components/ImageCards.js

import React, {useEffect, useState} from 'react'
import SampleImage from './SampleImage'

// Route Hooks
import { useRouteMatch } from 'react-router-dom'

// Material-UI Components and Hook
import {makeStyles} from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { DropzoneAreaBase } from 'material-ui-dropzone'
import Button from '@material-ui/core/Button'

// Initialize Sample Information
const initImages = []

// Create Styles Hook for Material-UI
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    buttonStyle: {
        marginTop: theme.spacing(2),
        width: '25%'
    }

}));

let localURL = "http://ec2-18-191-206-123.us-east-2.compute.amazonaws.com/images/"
// let localURL = "http://localhost:3001/images/"

function ImageCards() {

    // invoke Style Hook
    const classes = useStyles();

     // Create state for component
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(true)
    const [sampleImages, setSampleImages] = useState(initImages)
    const [fileObject, setFileObject] = useState([])
    const [refresh, setRefresh] = useState(false)

    // Identify current sample
    let matchID = useRouteMatch("/sample/:id").params.id;

    // Create Array of JSX Card Elemnts of the images
    const imgElementArray = sampleImages.map(item => {
        return  <Grid item xs={12} md={4} lg={3} key={item.id}> <SampleImage imageItem={item} /> </Grid>
    })

    // useEffect to fetch image data from API!
    useEffect(() => {
        if (matchID !== 'add'){
        let fetchURL = localURL + matchID
        const fetchData = async () => {
            setIsError(false)
            setIsLoading(true)
            try {
                const response = await fetch(fetchURL)
                const result = await response.json()

                if (!result.dataExists){
                    setSampleImages(result)}
                // console.log(result)
            } catch (error) {
                setIsError(true)
            }
            setIsLoading(false);
        }
        fetchData();
      }}, [matchID, refresh])

    // Upload Function
    const fileAdded = async () => {

        var formData = new FormData()
        formData.append('image', fileObject[0].file, fileObject[0].file.name)
        formData.append('sampleID', matchID)

        try {
            let response = await fetch('http://localhost:3001/uploadTS', {
                method: 'POST',
                body: formData
            })
            let success = await response.json()

            console.log('success', success)
            setRefresh(!refresh)
            setFileObject([])
        } catch (error) {
            console.log(error)
        }
    }

    // conditional render for loading, which should be replaced by the images in all cases execpt 'add'
    return (isLoading && isError && (matchID === 'add'))? (
        <>
            
        </>
    ) : ( 
        <>
            <Grid item xs={12} >
                <Paper className={classes.paper} >
                    <Typography variant="body1" component="h2" align="center" >
                        Thin Sections
                    </Typography>
                </Paper>
            </Grid>

            {imgElementArray}       

            <Grid item xs={12} lg={6} key="Add Image">
                <Paper className={classes.paper} >
                    
                    <DropzoneAreaBase
                        acceptedFiles={['image/*']}
                        fileObjects={fileObject}
                        maxFileSize={30000000}
                        filesLimit={1}
                        onAdd={(file) => {
                            // console.log(`on Add:`, file)
                            setFileObject([].concat(fileObject, file))
                        }}
                        onDelete={file => {
                            // console.log(`on Delete:`, file)
                            setFileObject([])
                        }}
                        dropzoneText={"Drag and drop an image here or click"}
                    />
                    <Button variant="contained" color="primary" className="buttonStyle"
                    onClick={() => {
                        // console.log('Upload')
                        fileAdded()}}
                    >
                        Add Image
                    </Button>

                </Paper>
            </Grid>
            

        </>
    )
}

export default ImageCards


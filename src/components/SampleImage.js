// ./components/SampleImage

import React from 'react'

// Material-UI Imports
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// imageItem has form of {id: #, sampleID: #, file_loc: 'image_url'}
const SampleImage = ({imageItem}) => {

    const copyToClipboard = () => {
        if (navigator.clipboard) {
        navigator.clipboard.writeText(name).then(
            () => {
                console.log("copy success", name)
            },
            error => console.log(error))}
        else {
            console.log('Copying Unsupported on this Browser')
        }
  }
    // use string manipulation to get the image name
    const name = imageItem.file_loc.split('/').pop()

    const imgURL = "http://ec2-18-191-206-123.us-east-2.compute.amazonaws.com/thin-sections/" + name
    // const imgURL = "http://localhost:3001/thin-sections/" + name

    return (
        <Card >
            <CardActionArea onClick={copyToClipboard} >
                <CardMedia
                component="img"
                alt={imageItem.sampleID}
                height="256"
                image={imgURL}
                title={imageItem.sampleID}
                />
                <CardContent>
                    <Typography gutterBottom variant="body1" component="h5">
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default SampleImage



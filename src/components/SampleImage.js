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
        navigator.clipboard.writeText(imageItem.file_loc).then(
            () => {
                console.log("copy success", imageItem.file_loc)
            },
            error => console.log(error))}
        else {
            console.log('Copying Unsupported on this Browser')
        }
  }
    // use string manipulation to get the image name
    const name = imageItem.file_loc.split('/').pop().split('.').shift()

    return (
        <Card >
            <CardActionArea onClick={copyToClipboard} >
                <CardMedia
                component="img"
                alt={imageItem.sampleID}
                height="256"
                image={imageItem.file_loc}
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



import React from 'react'

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import AttachmentIcon from '@material-ui/icons/Attachment'
import TextFormatIcon from '@material-ui/icons/TextFormat'
import ImageIcon from '@material-ui/icons/Image'


export default function ToolBar(props) {

    return (
        <div>
            <TextFormatIcon />
            <AttachFileIcon />
            <AttachmentIcon />
            <InsertEmoticonIcon />
            <ImageIcon />
        </div>
    );
}
import { useState } from 'react';
import { Grid, Message } from 'semantic-ui-react'


const Notification = ({message}) => {

    const [toggleMsg, setMsg] = useState(false)

    return(
        <Grid centered>
          <Grid.Row>
                <Grid.Column width={8}>
                    <Message 
                    hidden={toggleMsg} 
                    onDismiss={() => setMsg(true) } 
                    success={message.type === 'success' ? true : false} 
                    error={message.type === 'fail' ? true : false}
                    >
                        <Message.Header>{message.type}!</Message.Header>
                        <p>{message.content}</p>
                    </Message>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Notification;
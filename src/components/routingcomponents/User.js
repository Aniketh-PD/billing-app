import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';


const User = (props) => {
    const userDetails  = useSelector((state) => {
        return state.userInfo
    })

    return (
        <div style={{marginTop : '1rem'}}>
            <Card>
                <CardContent style={{backgroundColor : '#7EC8E3'}}>
                    <Typography gutterBottom>
                        UserName : {userDetails.username}
                    </Typography>
                    <Typography gutterBottom>
                        User Email : {userDetails.email}
                    </Typography>
                    <Typography gutterBottom>
                        Business : {userDetails.businessName}
                    </Typography>
                    <Typography gutterBottom>
                        Address : {userDetails.address}
                    </Typography>
                </CardContent>
            </Card><hr/>
        </div>
    )
}

export default User
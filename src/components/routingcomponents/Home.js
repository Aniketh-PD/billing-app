import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
const Home = (props) => {
    return(
            <div style={{display:'flex'}}>
                    <img style={{marginTop : '40px' }} src="https://www.subscriptionflow.com/wp-content/uploads/2020/06/Best-Recurring-Billing-System.jpg" alt="Bill Img" />
                <div style={{marginTop : '10rem'}}>
                    <Typography  variant="h4" gutterBottom>
                        Welcome to Billing management system 
                    </Typography>
                    <ul style={{listStyleType : 'none'}}>
                        <Typography variant="h6" gutterBottom> 
                        The application provides variuos sections such as Products,Customers and Bills where you can control your business needs 
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                        Get started by heading to the registration page shown on the top right corner or <Link to="/billingapp/register">click here</Link> 
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Just want to test out the features without going through the hassle of registering We've got you covered
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Head over to our login page shown at the top right corner or just simply <Link to="/billingapp/login">click here</Link>
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            An account has already been set up  where you can check out our services !
                        </Typography>
                    </ul>
                </div>
            </div>
    )
}

export default Home
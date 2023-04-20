import { useState } from "react"
import Footer from "../components/Footer"
import { Grid, Typography, Link } from '@mui/material'
import SignIn from "../components/Auth/SignIn"
import SignUp from "../components/Auth/SignUp"

function Auth() {
  const [isSignIn, setIsSignIn] = useState(true)

  const handleFormToggle = () => {
    setIsSignIn(!isSignIn)
  }

  return (
    <div className="app p-3">
      <Grid container justifyContent="center">
        <Grid item container direction="column" justifyContent="center" xs={12} sm={7} md={5} lg={3}>
          <>
          {
            isSignIn ? 
              <SignIn>
                <Typography position="relative" className="flex">
                  <span>No account yet? &nbsp;</span>
                  <Link component="button" underline="none" onClick={handleFormToggle}>Sign Up</Link>
                </Typography>
              </SignIn>
            : 
              <SignUp>
                <Typography position="relative" className="flex">
                  <span>Already have an account? &nbsp;</span>
                  <Link component="button" underline="none" onClick={handleFormToggle}>Sign In</Link>
                </Typography>
              </SignUp>
          }
          </>
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}

export default Auth
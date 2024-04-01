import React from 'react'

export default function Login() {
  return (
    <div>
            <form className='container sizer'>
                <h2 style={{textAlign:'center'}}>Login Form</h2>
                <p style={{textAlign:'center', color:'#767676'}}>To like NEOM's photo, login.</p>
                <div  style={{textAlign:'center'}}>
                <button type="button" className="btn btn-primary loginmain"><a style={{color:'white', textDecoration:"none"}} href="https://www.facebook.com/login.php?skip_api_login=1&api_key=779900868722692&kid_directed_site=0&app_id=779900868722692&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv18.0%2Fdialog%2Foauth%3Fclient_id%3D779900868722692%26redirect_uri%3Dhttps%253A%252F%252Funsplash.com%252Fnlog%252Ffacebook%26response_type%3Dcode%26scope%3Demail%2Bpublic_profile%26state%3DeyJsb2dpbl9hY3Rpb24iOiJbXCJMaWtlXCIse1wiYXNzZXRSb3V0ZVwiOltcIlBob3Rvc1wiLHtcInNsdWdcIjpcImEtbGFyZ2UtYm9keS1vZi13YXRlci1zdXJyb3VuZGVkLWJ5LW1vdW50YWlucy1MQWo5MGVBWE9aQVwifV0sXCJ1c2VySWRcIjpcIm1ZaXpTcmRKa2tVXCJ9XSIsInJlZmVycmVyIjoiLyIsInJlZmVycmVyX2xvY2FsZSI6ImVuLVVTIiwiY3NyZl90b2tlbiI6InhBZU9xeVBDMDQ0QUpDYXgtOHd2QnlBaF8wanRUOEtnbTc3aDJxQl8xRHlsdW8tbVVNaUt5bEtVSjJqQSJ9%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D2921ae31-2426-40c3-a78c-9fe84edf13fd%26tp%3Dunspecified&cancel_url=https%3A%2F%2Funsplash.com%2Fnlog%2Ffacebook%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DeyJsb2dpbl9hY3Rpb24iOiJbXCJMaWtlXCIse1wiYXNzZXRSb3V0ZVwiOltcIlBob3Rvc1wiLHtcInNsdWdcIjpcImEtbGFyZ2UtYm9keS1vZi13YXRlci1zdXJyb3VuZGVkLWJ5LW1vdW50YWlucy1MQWo5MGVBWE9aQVwifV0sXCJ1c2VySWRcIjpcIm1ZaXpTcmRKa2tVXCJ9XSIsInJlZmVycmVyIjoiLyIsInJlZmVycmVyX2xvY2FsZSI6ImVuLVVTIiwiY3NyZl90b2tlbiI6InhBZU9xeVBDMDQ0QUpDYXgtOHd2QnlBaF8wanRUOEtnbTc3aDJxQl8xRHlsdW8tbVVNaUt5bEtVSjJqQSJ9%23_%3D_&display=page&locale=en_GB&pl_dbl=0">Login with Facebook</a></button>
                </div>

            <div>
                <label htmlFor="uname" style={{color:'#767676'}}><b>Email</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required  />
                <label htmlFor="psw" style={{color:'#767676'}}><b>Password</b></label><span className="psw"><a href="#" style={{color:'#767676'}}>Forgot your password?</a></span>
                <input type="password" placeholder="Enter Password" name="psw" required />
                <button type="submit" className='loginmain' style={{backgroundColor: '#000000', borderRadius:'7px'}}>Login</button>
                <label>
                </label>
            </div>

            <div className="container">
            <p style={{textAlign:'center'}}>Don’t have an account?<a style={{color:'#767676'}} href="https://unsplash.com/join?action=%5B%22Like%22%2C%7B%22assetRoute%22%3A%5B%22Photos%22%2C%7B%22slug%22%3A%22a-large-body-of-water-surrounded-by-mountains-LAj90eAXOZA%22%7D%5D%2C%22userId%22%3A%22mYizSrdJkkU%22%7D%5D&referrer=%2F"> Join</a></p>
            </div>
            </form>
    </div>
  )
}

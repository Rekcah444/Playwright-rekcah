import{test,expect} from '@playwright/test'

export class homepage{

  username_loca="#username"
  passowrd_loca='#password'
  login_loca='#login'

  async homepagelogin(username,password){
    this.page.goto("https://example.com")
    this.page.fill(this.username_loca,username)
    this.page.fill(this.password_loca,password)
    this.page.click(this.login_loca)
    
  }
}

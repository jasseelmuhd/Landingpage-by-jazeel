class Landingpage{
    //property
    dataBase={
        "Milan":{username:"Milan",password:"milan321"},
        "Malu":{username:"Malu",password:"malu5432"},
        "Peter":{username:"Peter",password:"peter123"},
        "Sudhi":{username:"Sudhi",password:"sudhi789"}
    }
    /* saveData(){
        if(this.dataBase){
            localStorage.setItem("dataBase",JSON.stringify(this.dataBase))
        }
    } */
    getData(){
        this.dataBase=JSON.parse(localStorage.getItem("dataBase"))
        console.log(this.dataBase);
    }
    //method to register an user
    register(){
        this.getData()
        let user=regUsername.value
        let pswd=regPswd.value
        if(user ==" "||pswd == " "){
            alert('please enter username or password')
        }
        else{
            if(user in this.dataBase){
                alert('username exists')
            }
            else{
                this.dataBase[user]={username:user,password:pswd}
                console.log(this.dataBase);
                this.saveData()
                //navigate to login page
                window.location = 'index.html'
            }
        }
    }
    //method to sign in
    login(){
        let user=loginUsername.value
        let pswd=loginpswd.value
        console.log(loginpswd.value);
        console.log(user , pswd);

        if(user=="" || pswd==""){
            alert('please fill the form')
        }
        else{
            if(user in this.dataBase){
                if(this.dataBase[user].password==pswd){
                    localStorage.setItem("username",user)
                    alert('Login success')
                    window.location='home.html'
                }
                else{
                    alert('incorrect username or password')
                }
            }
            else{
                alert('account doesnot exists')
            }
        }
    }
}

const obj = new Landingpage()
/* obj.saveData() */
obj.getData()
import $ from 'jquery';
import jwt_decode from 'jwt-decode';

const ModuleUser = {
    state: {
        id: "",
        username: "",
        photo: "",
        followerCount: 0,
    },
    getters: {
    },
    mutations: {
    },
    actions: {
        login(context, data){
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/api/token/",
                type: "POST",
                data: {
                    username: data.username,
                    password: data.password,
                },
                success(resp) {
                    const {access, refresh} = resp;
                    const access_obj = jwt_decode(access);
                    $.ajax({
                        url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
                        type: "GET",
                        data: {
                            user_id: access_obj.user_id,
                        },
                        headers: {
                            'Authorization': "Bearer " + access,
                        },
                        success(resp) {
                            console.log(resp, refresh);
                        },
                    });
                }
            });
        }
    },
    modules: {
    }
  };

  export default ModuleUser;
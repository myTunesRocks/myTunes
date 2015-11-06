var login = {

  init: function(){
    login.events();
  },
  events: function(){
    $('body').on('click', '.loginButton', function(){
      var loginData = {
        username: $('input[name="username"]').val(),
        password: $('input[name="password"]').val()
      }
    $.ajax({
      url: '/login',
      method: 'POST',
      data: loginData,
      success: function(data){
        console.log('SUCCESS', data);
      },
      failure: function(data){
        console.log('FAILURE', data)
      }
    });
  });
  },


}

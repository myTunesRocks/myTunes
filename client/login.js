var login = {

  init: function(){
    login.events();
  },
  events: function(){
    login.login();
    login.logout();
  },
  login: function(){
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
        $('.mobile').removeClass('hidden');
      },
      error: function(data){
        console.log('FAILURE', data);
        $('.landingPage').removeClass('hidden');
        $('.genrePage').addClass('hidden');
        $('input[name="username"]').val('INVALID USERNAME');
        $('input[name="password"]').val('OR PASSWORD');
      }
    });
  });
},

  logout:function(){
    $('body').on('click', '.logout', function(){
    $.ajax({
      url: '/logout',
      method: 'POST',
      success: function(data){
        console.log('SUCCESS')
        $('.landingPage').removeClass('hidden');
        $('.genrePage').addClass('hidden');
        $('.albumPage').addClass('hidden');
        $('.artistPage').addClass('hidden');
        $('.mobile').addClass('hidden');

      },
      failure: function(data){
        console.log('FAILURE')
      }
    });
  });


  },


}

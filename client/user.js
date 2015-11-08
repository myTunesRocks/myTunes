var loadUsers = {
  init: function(){
    loadUsers.styling();
  },
  styling: function(){
    $.ajax({
      url: '/login',
      method: 'GET',
      success: function(data){
        console.log('success', JSON.parse(data))
      }
    });
  }

}

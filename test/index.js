import launchApplication from '../lib/launch-application';

document.getElementById('checkBtn').onclick = function(){  
  var url = document.getElementById('protocolTxt').value; 

  launchApplication(url, function(){  
      alert('success');  
  }, function(){  
      alert('fail');  
  });
};  
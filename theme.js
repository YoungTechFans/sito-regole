  let darkModeVar = localStorage['YoungTechFanGroupSiteDarkMode'];
  const chk = document.getElementById('chk');
            
  if (darkModeVar == undefined)
  {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches)
    {
      localStorage['YoungTechFanGroupSiteDarkMode'] = 'dark';
    }
    else
    {
      localStorage['YoungTechFanGroupSiteDarkMode'] = 'light';
    }
  }
  else if (darkModeVar == "light")
  {
    document.body.classList.toggle('chiara', true);
    document.body.classList.toggle('chiara2', true);
    document.body.classList.toggle('chiara3', true);
    document.body.classList.toggle('accauno', true);
    chk.checked = true;

  }
  else if (darkModeVar == "dark")
  {
    document.body.classList.toggle('chiara', false);
    document.body.classList.toggle('chiara2', false);
    document.body.classList.toggle('chiara3', false);
    document.body.classList.toggle('accauno', false);
    chk.checked = false;

  }


            
        
  

  chk.addEventListener('change', () => {
    //console.log(chk.checked);
    if (chk.checked)
    {
      localStorage['YoungTechFanGroupSiteDarkMode'] = 'light';
    }
    else if (chk.checked == false)
    {
      localStorage['YoungTechFanGroupSiteDarkMode'] = 'dark';
    }


    darkModeVar = localStorage['YoungTechFanGroupSiteDarkMode'];

   

	  document.body.classList.toggle('chiara');
    document.body.classList.toggle('chiara2');
    document.body.classList.toggle('chiara3');
    document.body.classList.toggle('accauno');
  });


function enabletext(opt)
{	
	if(opt == 'other')
	{
        document.getElementById("other").disabled = false;
        document.getElementById("trainerName").disabled = true;
	}
        else
        {
        document.getElementById("trainerName").disabled = false;
        document.getElementById("other").disabled = true;
        }
}

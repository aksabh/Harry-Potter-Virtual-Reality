#pragma strict

var testObj : GameObject;

private var canHover : boolean = false;

function Update()
{
    var fwd = transform.TransformDirection(Vector3.forward); 
    var hit : RaycastHit; 
    
    if (Physics.Raycast(transform.position, fwd, hit))
    {
        if(hit.distance <= 5.0 && hit.collider.gameObject.tag == "pickup") 
        {
            canHover = true;
    		
            if(Input.GetKeyDown("y")) 
            {
                Destroy(testObj);
                //Do something! 
            }
        }
  
        else
        {
            canHover = false;
        }
    }
}

function OnGUI()
{
    if(canHover == true)
    {
        GUI.Box(Rect(Screen.width / 2 - 100, Screen.height / 2 - 100, 150, 20), "Take Hocrux");
        //canHover = false;
    }
}
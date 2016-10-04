#pragma strict


var playVoldemort: AudioClip;
function OnTriggerExit()
{
    GetComponent.<AudioSource>().PlayOneShot(playVoldemort);
}
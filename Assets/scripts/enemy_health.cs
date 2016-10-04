using UnityEngine;
using System.Collections;

public class enemy_health : MonoBehaviour {
    public float health = 100f;

	public void removeHealth(float amount)
    {
        health -= amount;
        if(health <=0)
        {
            Destroy(gameObject);
        }
    }
}

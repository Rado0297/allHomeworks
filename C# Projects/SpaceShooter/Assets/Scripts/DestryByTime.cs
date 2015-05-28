using UnityEngine;
using System.Collections;

public class DestryByTime : MonoBehaviour 
{
	public float lifeTime;

	void Start()
	{
		Destroy (gameObject, lifeTime);
	}
}

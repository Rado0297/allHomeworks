using UnityEngine;
using System.Collections;

public class RadndomRotator : MonoBehaviour 
{
	public float tumble;

	void Start()
	{
		rigidbody.angularVelocity = Random.insideUnitSphere * tumble;
	}
}

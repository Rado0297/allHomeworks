using UnityEngine;
using System.Collections;
using System.Threading;
using UnityEngine.UI;

public class GM : MonoBehaviour {

	public int lives = 3;
	public int bricks = 30;
	public float resetDelay = 1f;
	public int numberOfLevels = 7; //change this value when make more levels !!!
	public Text livesText;
	public GameObject GameOver;
	public GameObject YouWon;
	public GameObject waitTxt;
	public GameObject bricksPrefab;
	public GameObject paddle;
	public GameObject deathParticles;
	public static GM instance = null;

	private GameObject clonePaddle;

	// Use this for initialization
	void Start () 
	{
		if (instance == null)
			instance = this;
		else if (instance != this)
			Destroy (gameObject);

		Setup();
	}

	public void Setup()
	{
		clonePaddle = Instantiate(paddle, transform.position, Quaternion.identity) as GameObject;
		Instantiate(bricksPrefab, transform.position, Quaternion.identity);
	}

	void Update(){
		if(Input.GetKey(KeyCode.Escape))
			Application.Quit();
	}

	void CheckGameOver()
	{
		if (bricks < 1)
		{
			//Needs debugging for last level
			if(Application.loadedLevel == numberOfLevels)
			{
				YouWon.SetActive(true);
				waitTxt.SetActive(false);
			}
			else
			{
				YouWon.SetActive(false);
				waitTxt.SetActive(true);
				Time.timeScale = .25f;
				Invoke("NextLevel", 1f);
			}
			//YouWon.SetActive(true);
			//waitTxt.SetActive(true);
			//Time.timeScale = .25f;
			//Invoke("NextLevel", 1f);

			//Invoke("Reset", resetDelay);
			//This is for going to next level, but it needs to be setted in corect order
			//THIS NEED DEBUGGING
			//Thread.Sleep(1000);
			//Application.LoadLevel(Application.loadedLevel+1);
		}

		if (lives < 1)
		{
			GameOver.SetActive(true);
			Time.timeScale = .25f;
			Invoke("Reset", resetDelay);
		}
	}

	void Reset()
	{
		Time.timeScale = 1f;
		Application.LoadLevel(Application.loadedLevel);
	}

	void NextLevel() {
		Time.timeScale = 1f;
		Application.LoadLevel(Application.loadedLevel+1);
	}

	public void LoseLive()
	{
		lives--;
		livesText.text = "Lives: " + lives;
		Instantiate(deathParticles, clonePaddle.transform.position, Quaternion.identity);
		Destroy(clonePaddle);
		Invoke("SetupPaddle", resetDelay);
		CheckGameOver();
	}

	void SetupPaddle()
	{
		clonePaddle = Instantiate(paddle, transform.position, Quaternion.identity) as GameObject;
	}

	public void DestroyBrick()
	{
		bricks--;
		CheckGameOver();
	}
}

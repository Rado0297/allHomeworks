#include <iostream>
#include <string>
using namespace std;

/*
			1
			.
		   ,O,
		  ,OOO,
5	'oooooOOOOOooooo'  2
	  `OOOOOOOOOOO`
		`OOOOOOO`
		OOOO'OOOO
	   OOO'   'OOO
	  O'         'O
     
	 4				3

*/

const int LINE_1_3 = 0;
const int LINE_1_4 = 1;
const int LINE_2_4 = 2;
const int LINE_2_5 = 3;
const int LINE_3_5 = 4;

void calculateLine(double x1, double x2, double y1, double y2, double& a, double& b) {
	a = (y1-y2) / (x1-x2);
	b = (x1*y2 - y1*x2) / (x1-x2);
}

void calculateLines(double edges[][2], double lines[][2]) {
	int linesEdges[5][2] = {{0,2},{0,3},{1,3},{1,4},{2,4}};
	for (int i = 0; i < 5; i++) {
		double edge1X = edges[linesEdges[i][0]][0];
		double edge1Y = edges[linesEdges[i][0]][1];
		double edge2X = edges[linesEdges[i][1]][0];
		double edge2Y = edges[linesEdges[i][1]][1];
		calculateLine(edge1X, edge2X, edge1Y, edge2Y, lines[i][0], lines[i][1]);
	}
}

int getPosition(double lines[][2], int lineIndex, double x, double y) {
	double lineY = lines[lineIndex][0]*x + lines[lineIndex][1];
	if (y < lineY) return -1;
	else if (y > lineY) return 1;
	else return 0;
}

int main ()
{
	double edges[5][2], lines[5][2], x, y;

	//2 2 5 1 5 -1 -1 -1 -1 1

	for (int i = 0; i < 5; i++)
		cin>>edges[i][0]>>edges[i][1];

	cin>>x>>y;

	calculateLines(edges, lines);
	
	int pos13 = getPosition(lines,LINE_1_3,x,y);
	int pos14 = getPosition(lines,LINE_1_4,x,y);
	int pos24 = getPosition(lines,LINE_2_4,x,y);
	int pos25 = getPosition(lines,LINE_2_5,x,y);
	int pos35 = getPosition(lines,LINE_3_5,x,y);

	cout<<"Sector: ";
	if (pos13 == -1 && pos14 == -1 && pos25 == -1 && pos24 == 1 && pos35 == 1) 
		cout<<0;
	else if (pos13 == -1 && pos14 == -1 && pos25 == 1)
		cout<<1;
	else if (pos13 == 1 && pos24 == 1 && pos25 == -1)
		cout<<2;
	else if (pos13 == -1 && pos24 == -1 && pos35 == 1)
		cout<<3;
	else if (pos14 == -1 && pos24 == 1 && pos35 == -1)
		cout<<4;
	else if (pos14 == 1 && pos25 == -1 && pos35 == 1)
		cout<<5;
	else
		cout<<"none";

	cout<<endl;

    return 0;
}
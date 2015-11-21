using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace MouseOverDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void pictureBox3_Click(object sender, EventArgs e)
        {

        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void pictureBox1_MouseHover(object sender, EventArgs e)
        {
            pictureBox1.ImageLocation = "D:/C# Programming/Windows form projects/MouseOverDemo/MouseOverDemo/Images/rose.jpg";
            pictureBox2.ImageLocation = "";
            pictureBox3.ImageLocation = "";
        }

        private void pictureBox2_MouseHover(object sender, EventArgs e)
        {
            pictureBox1.ImageLocation = "";
            pictureBox2.ImageLocation = "D:/C# Programming/Windows form projects/MouseOverDemo/MouseOverDemo/Images/flower2.jpg";
            pictureBox3.ImageLocation = "";
        }

        private void pictureBox3_MouseHover(object sender, EventArgs e)
        {
            pictureBox1.ImageLocation = "";
            pictureBox2.ImageLocation = "";
            pictureBox3.ImageLocation = "D:/C# Programming/Windows form projects/MouseOverDemo/MouseOverDemo/Images/flower3.jpg";
        }

        private void Form1_MouseHover(object sender, EventArgs e)
        {
            pictureBox1.ImageLocation = "";
            pictureBox2.ImageLocation = "";
            pictureBox3.ImageLocation = "";
        }

        private void button1_MouseHover(object sender, EventArgs e)
        {
            pictureBox1.ImageLocation = "";
            pictureBox2.ImageLocation = "";
            pictureBox3.ImageLocation = "";
        }
    }
}

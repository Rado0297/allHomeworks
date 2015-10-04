using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace textboxChangeColor
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            textBox1.BackColor = Color.Black;
        }

        private void button2_Click(object sender, EventArgs e)
        {
            textBox1.BackColor = Color.Red;
        }

        private void button3_Click(object sender, EventArgs e)
        {
            textBox1.BackColor = Color.Yellow;
        }

        private void button4_Click(object sender, EventArgs e)
        {
            textBox1.BackColor = Color.Lime;
        }

        private void button5_Click(object sender, EventArgs e)
        {
            textBox1.BackColor = Color.Aqua;
        }

        private void button6_Click(object sender, EventArgs e)
        {
            textBox1.BackColor = Color.Silver;
        }
    }
}

using System;
using System.CodeDom;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace WriteSomeThing
{
    class Program
    {
        static void Main(string[] args)
        {
            for (var i = 0; i < 1000; i++)
            {

                Log.WriteLogForSyncKBbemisWorkgroup("E:\\", "Demo.txt", i.ToString(CultureInfo.InvariantCulture), false);
                Log.WriteLogForSyncKBbemisWorkgroup("E:\\", "Demo.txt", "Harry" + i, true);
                Console.WriteLine("Successed! i=" + i);
                Thread.Sleep(1000);
            }
        }
    }
}

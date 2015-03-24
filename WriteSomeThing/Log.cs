using System.Linq;
using System.Runtime.InteropServices;
using System.Threading;

namespace WriteSomeThing
{
    using System;
    using System.IO;

    public class Log
    {
        public static string[] HeadTitles = { "CorrelatationID", "StartTime", "NumberofPulledKB", "PullCompletedTime", "SyncedKB", "FailedKB", "CICreatedEndTime" };
        private static Object locker = new Object();
        public static StreamWriter Sw = null;

        public static void WriteLogForSyncKBbemisWorkgroup(string filePath, string fileName, string value, bool closeStream)
        {
            var fileFullPath = filePath + @"\" + fileName;

            lock (locker)
            {
                //Check if file named fileName has created.
                if (!File.Exists(fileFullPath))
                {
                    //Not exists file, create.
                    using (StreamWriter sw = File.CreateText(fileFullPath))
                    {
                        //Write formated title
                        var titleStr = HeadTitles.Aggregate("", (current, titleName) => current + (titleName + "\t"));

                        sw.WriteLine(titleStr);
                        sw.Close();
                    }
                }

                if (Sw == null)
                {
                    if (closeStream)
                    {
                        throw new Exception("Stream Writer is null, could't be closed.");
                    }

                    Sw = new StreamWriter(fileFullPath, true);
                }

                if (closeStream)
                {
                    Sw.Write(value + "\r\n");
                    Sw.Close();
                    Sw = null;
                }
                else
                {
                    Sw.Write(value + "\t");
                }
            }
        }
    }
}

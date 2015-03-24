using System.Linq;
using System.Runtime.InteropServices;
using System.Threading;

namespace WriteSomeThing
{
    using System;
    using System.IO;

    public class LogDemo
    {
        public static string[] HeadTitles = { "CorrelatationID", "StartTime", "NumberofPulledKB", "PullCompletedTime", "SyncedKB", "FailedKB", "CICreatedEndTime" };
        private static ReaderWriterLockSlim _readWriteLock = new ReaderWriterLockSlim();

        /// <summary>
        /// Log for SyncKBbemisWorkgroupService
        /// </summary>
        /// <param name="filePath">File Path</param>
        /// <param name="fileName">File Name</param>
        /// <param name="correlatationId">Correlatation Id</param>
        /// <param name="startTime">Start Time</param>
        /// <param name="numberofPulledKb">Numnber Of Pulled KB</param>
        /// <param name="pullCompletedTime">Pull Completed Time</param>
        /// <param name="syncedKb">Synced KB</param>
        /// <param name="failedKb">Failed KB</param>
        /// <param name="ciCreatedEndTime">CI Created End Time</param>
        public static void WriteLogForSyncKBbemisWorkgroup(string filePath, string fileName, string correlatationId, DateTime startTime, int numberofPulledKb, DateTime pullCompletedTime, string syncedKb, string failedKb, DateTime ciCreatedEndTime)
        {
            var fileFullPath = filePath + @"\" + fileName;
            //Check if file named fileName has created.
            var ifExistsFile = File.Exists(fileFullPath);

            _readWriteLock.EnterWriteLock();
            try
            {
                if (!ifExistsFile)
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
                else
                {
                    //Append to the exist file.
                    using (StreamWriter sw = File.AppendText(fileFullPath))
                    {
                        sw.WriteLine("{0}\t{1}\t{2}\t{3}\t{4}\t{5}\t{6}\t",
                            correlatationId, startTime,
                            numberofPulledKb, pullCompletedTime,
                            syncedKb, failedKb, ciCreatedEndTime);

                        sw.Close();
                    }
                }
            }
            finally
            {
                _readWriteLock.ExitWriteLock();
            }
        }

        public static void WriteLogForSyncKBbemisWorkgroup(string filePath, string fileName, string correlatationId, string writeHeadName, string value)
        { 
            var fileFullPath = filePath + @"\" + fileName;
            //Check if file named fileName has created.
            var ifExistsFile = File.Exists(fileFullPath);

            _readWriteLock.EnterWriteLock();
            try
            {
                if (!ifExistsFile)
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
                else
                {
                    if (writeHeadName == HeadTitles[0])
                    {
                        //Find exist line.
                        using (StreamReader reading = File.OpenText(fileFullPath))
                        {
                            string str;
                            while ((str = reading.ReadLine()) != null)
                            {
                                if (str.Contains(value))
                                {
                                    throw new Exception("The CorrelatationId is already exist.");
                                }
                            }
                        }

                        //Create a new line.
                        //Append to the exist file.
                        using (StreamWriter sw = File.AppendText(fileFullPath))
                        {
                            sw.WriteLine("{0}\t{1}\t{2}\t{3}\t{4}\t{5}\t{6}\t",
                                value, "",
                                "", "",
                                "", "", "");

                            sw.Close();
                        }
                    }
                    else
                    {
                        if (string.IsNullOrEmpty(correlatationId))
                        {
                            throw new Exception("The CorrelatationId is null or empty!");
                        }

                        //Find exist line.
                        var allLines = File.ReadAllLines(fileFullPath);

                        string str;

                        for (var lineId = 1; lineId < allLines.Length; lineId++)
                        {
                            str = allLines[lineId];

                            if (str.Contains(correlatationId))
                            {
                                var foundLineId = lineId;

                                var foundHeadName = false;
                                var lineAllValues = str.Split('\t');

                                //Find the position, and set the value of the title.
                                for (var i = 0; i < HeadTitles.Length; i++)
                                {
                                    var headName = HeadTitles[i];
                                    if (headName == writeHeadName)
                                    {
                                        lineAllValues[i] = value;
                                        foundHeadName = true;
                                        break;
                                    }
                                }

                                if (foundHeadName)
                                {
                                    allLines[foundLineId] = string.Join("\t", lineAllValues);
                                }
                                else
                                {
                                    throw new Exception(string.Format("Could't found HeadName({0}).", writeHeadName));
                                }
                            } 
                        }

                        //Write back
                        var allString = allLines.Aggregate("", (current, t) => current + (t + "\n"));
                        File.WriteAllText(fileFullPath, allString);
                    }
                }
            }
            finally
            {
                _readWriteLock.ExitWriteLock();
            }
        }


        public static StreamWriter Sw = null;

        public static void CheckAndCreatFile(string filePath, string fileName)
        {
            var fileFullPath = filePath + @"\" + fileName;
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
        }

        public static void WriteLogForSyncKBbemisWorkgroup(string filePath, string fileName, string value, bool closeStream)
        {
            var fileFullPath = filePath + @"\" + fileName;
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

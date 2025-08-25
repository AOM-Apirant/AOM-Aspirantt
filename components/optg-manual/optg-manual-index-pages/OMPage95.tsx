import React from 'react'

const OMPage95 = () => {
  return (
    <div>
        Asset Utilization Statistics
Wagon Turn Round is the time interval between two successive loadings. It is
normally expressed in number of days. It is the time taken by a wagon to go through
one complete cycle of loading, movement to destination, unloading and next loading.
A drop in wagon turn round without a corresponding drop in lead is a healthy sign
indicating better wagon mobility.
In order to calculate WTR on a divisional basis, where many a times only part of the
wagon cycle gets completed, the following formula is used.
T = B / (L+R)
Where
T = Wagon Turn round (in days);
B = Number of effective wagons held at odd hours;
L = Loading for the day in number of wagons and
R = Number of loaded wagons received during the day.
Wagon KM per wagon day is a measure of wagon mobility and indicates the average
number of kilometers moved by a wagon per day, both loaded and empties run
included. A drop in this index indicates wagons are not smoothly moving and there is
a hold up. The time spent under maintenance by a wagon is not included while
working out this index. However any other idling when on line will bring down the
figure.
As an example, for a freight train that ran 1000 kms in 36 hours,
WKM per wagon day = 1000/36 x 24 = 667 kms/day.
EKM – Engine Kilometer is the distance traveled by an engine in a day. It includes
train kms hauled by the engine as well as distance travelled by the engine as „light
engine‟. It also includes „shunting kms‟ to include work done by the engine for
shunting in a station calculated as a thumb rule of 15 km per hour. This statistics is
daily and periodically monitored for ensuring that locos are not kept unwarrantedly
idle and they are put to maximum use. EKM for a division is calculated by the
formula…
EKM = Total Engine kilometers earned in a day / Outage
Coach KM per coach day - This unit of measure gives an idea of how efficiently the
coaching stock is being utilized. When same numbers of coaching trains are run with
lesser number of coaches, coach kilometer per coach day improves. The rake links
are reviewed to maximize coach kilometer per coach day. This is worked out in lines
of WKM per wagon day.
Crew Kilometer Run is the number of kms worked by a crew. The higher the km, the
better is the utilization of the crew. Some short lead movements which are
significant for train operations are given benefit of additional kms (pilot kms) in order
not to disincentivize the crew engaged in such critical operations.
Line Capacity Utilization is the percentage of actual number of trains run in a section
as compared to the designed line capacity. It gives an indication on level of
congestion in order to identify, propose and execute works to improve the designed
line capacity. As infrastructure works take time and cost for execution, quite often
busy sections face with the challenge of accommodating more number of trains as
well as ensuring maintenance blocks. In these sections, any improvement in either
of the aspects will lead to improved line capacity utilization. Running long haul
trains, reducing ineffective block time, improving block output, and integrated blocks
are few such measures.
Average Gross Train Load (in tonnes) - This figure is the average overall load of a
goods train i.e. the freight load plus the weight of the rolling stock.
Average Gross Train Load = GTKM / Total train kms.
This statistics gives an idea of the load required to be hauled and hence significant in
planning for adequate tractive effort; the most economic or the best for seamless
operations etc.
Many more indices are measured depending on the need to understand the
train operations better, thereby contributing to better decision making. These can
either be directly collected or derived through various formulae using two or more
sets of data. With the implementation of IT in many areas of train running like FOIS,
ICMS, TMS, Data logger etc., Indian Railways now has „big data‟. Web reports in
required format can be sought from CRIS, New Delhi for deciding on any specific
matter. Analyzing these big data based on traditional indices and improved indices
will go a long way in improving the efficiency of train operations.
    </div>
  )
}

export default OMPage95
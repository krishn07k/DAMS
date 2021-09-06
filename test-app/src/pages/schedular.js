import React from 'react';
import { Inject, ScheduleComponent,Day,Week,WorkWeek,Month} from '@syncfusion/ej2-react-schedule';



const schedular = () => { 

  return <ScheduleComponent>
    <Inject services={[Day,Week,WorkWeek,Month]} />
 </ScheduleComponent>
}

export default schedular;

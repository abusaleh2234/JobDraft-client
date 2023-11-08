
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const JobsTab = () => {

    const categorys = ["All Jobs","On Site Job","Remote Job","Hybrid","Part Time"]
    return (
        <Tabs>
            <TabList>
                {
                    categorys.map(category => <Tab key={category}>{category}</Tab>)
                }
                {/* <Tab>Title 1</Tab>
                <Tab>Title 2</Tab> */}
            </TabList>

            <TabPanel>
                <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
            {/* <TabPanel>
                <h2>Any content 3</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 4</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 5</h2>
            </TabPanel> */}
        </Tabs>
    )
}



// const JobsTab = () => {
//     return (
//         <div>

//         </div>
//     );
// };

export default JobsTab;
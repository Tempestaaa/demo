import {} from "antd"
import { Tag, Space } from "antd"
import React from "react"
import { Collapse } from 'antd';

// import { Descriptions } from 'antd';

const { Panel } = Collapse;
const text = [
  `Boring!!!`,
  `Very good. But very bad also`,
  `Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.`
]
;

function PageContent(){
  // const [show, setShow] = React.useState(false)
  const onChange = (key) => {
    console.log(key);
  };
  return <div className="pageContent" >
    

    <div style={{
      height: '100px',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      fontSize: '2em',
      fontWeight: '600',
    }}>
      Post title 1
    </div>

    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '1.2em'
    }}>
      <div style={{
        fontSize: '1.4em',
        fontWeight: '500'
      }}>
        Author: John Smith <br></br>
        Created at: Sep 20, 2018
      </div>

      <Space size={[0, 5]} wrap style={{
        width: '20%'
      }}>
        <Tag color="magenta">magenta</Tag>
        <Tag color="red">red</Tag>
        <Tag color="volcano">volcano</Tag>
        <Tag color="orange">orange</Tag>
        <Tag color="gold">gold</Tag>
       <Tag color="lime">lime</Tag>
        <Tag color="green">green</Tag>
        <Tag color="cyan">cyan</Tag>
        <Tag color="blue">blue</Tag>
        <Tag color="geekblue">geekblue</Tag>
        <Tag color="purple">purple</Tag>
    </Space>
    </div>
    <div style={{
      fontSize: '1.4em',
      fontWeight: '400',
      // maxWidth: '100ch',
      display: '-webkit-box',
      '-webkit-line-clamp': '4',
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden',
    }}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium iure at magni obcaecati nulla ullam cupiditate dolore molestias, unde consectetur, debitis sed optio labore quo quod voluptatibus eaque ab vitae nisi culpa provident sit. Tenetur, veritatis. Fugiat debitis eos totam perferendis ratione temporibus, iure labore accusamus ipsum placeat ullam? Rerum, nesciunt vero? A aspernatur porro voluptates alias ratione maxime aliquid consectetur laborum perferendis? A nulla quis, magni voluptatum tempore eum nemo ea voluptate qui illo eligendi? Nam, asperiores repellat nobis id sint et ipsa sed. Neque tenetur, aperiam recusandae earum nemo, possimus veritatis doloribus assumenda error vel iusto dicta quo.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium iure at magni obcaecati nulla ullam cupiditate dolore molestias, unde consectetur, debitis sed optio labore quo quod voluptatibus eaque ab vitae nisi culpa provident sit. Tenetur, veritatis. Fugiat debitis eos totam perferendis ratione temporibus, iure labore accusamus ipsum placeat ullam? Rerum, nesciunt vero? A aspernatur porro voluptates alias ratione maxime aliquid consectetur laborum perferendis? A nulla quis, magni voluptatum tempore eum nemo ea voluptate qui illo eligendi? Nam, asperiores repellat nobis id sint et ipsa sed. Neque tenetur, aperiam recusandae earum nemo, possimus veritatis doloribus assumenda error vel iusto dicta quo. 
    </div>
    <div style={{
      marginTop: '3em',
      color: 'rgb(150 150 150)'
    }}>
      <Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header="3 replies" key="1" style={{
        // border: 'none',
        // background: '#fff',
        // boxShadow: 'none',
      }}>
        <p>{text[0]}</p>
        <p>{text[1]}</p>
        <p>{text[2]}</p>

      </Panel>
    </Collapse>
    </div>
  </div>
}

export default PageContent;
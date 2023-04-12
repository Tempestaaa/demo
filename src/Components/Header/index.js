import { } from "antd"
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

function AppHeader(){
  return <div className="header" >
    <div
      style={{
        width: '40%',
        height: '100%',
        background: '#666',
      }}
    >
      <div style={{
        float: "right",
        textAlign: "center",
        lineHeight: "60px",
        width: '90%',
        height: "100%",
        background: '#fff',
        fontSize: '1.5em',
        fontWeight: '600'
      }}
      >Logo</div>
    </div>

    <h2 style={{
        // width: '20%',
        flex: '1',
        textAlign: "center",
        border: "4px solid #000",
        lineHeight: "60px",
        height: "100%",
        fontWeight: '600',
      }}>Blogs</h2>

    <div
      style={{
        width: '40%',
        height: '100%',
        background: '#fff',
        float: 'right',
      }}
    >
      <div style={{
        float: 'right',
        width: '45%',
        height: '100%',
        textAlign: 'center',
        lineHeight: '60px',
        fontSize: '1.5em',
        fontWeight: '600'
      }}>Adam Levine</div>
      <Avatar shape="square" size={60} icon={<UserOutlined />} style={{
        float: "right",
      }}/>
      
    </div>
    </div>
}

export default AppHeader;
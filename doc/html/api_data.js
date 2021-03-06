define({ "api": [
  {
    "type": "POST",
    "url": "/system/init",
    "title": "1.03 系统初始化",
    "group": "1_System",
    "version": "0.1.0",
    "description": "<p>详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "masterIp",
            "description": "<p>master机器IP地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "msgOutParams",
            "description": "<p>输出消息参数，支持多个消息服务器</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>输出消息类型，默认为RabbitMQ</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "host",
            "description": "<p>服务器IP地址</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "port",
            "description": "<p>端口</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passWord",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "exchange",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "routingKey",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "gb28181Params",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "localHostIp",
            "description": "<p>本地上级域Host IP地址，可为任意一个slave</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "localSipId",
            "description": "<p>本地上级域sipId</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "localPort",
            "description": "<p>本地上级域端口</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "gat1400Params",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "localGatHostIp",
            "description": "<p>本地Host IP地址，可为任意一个slave</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "localGatServerId",
            "description": "<p>本地服务Id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "localGatPort",
            "description": "<p>本地服务端口</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform",
            "description": "<p>对接的1400平台，可以是多个</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>平台Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": "<p>平台IP地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>平台用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>平台密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "manufactor",
            "description": "<p>厂家名字，用于区分各个厂家的非标协议</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n    \"masterIp\": \"192.168.0.100\",\n    \"msgOutParams\": [\n        {\n            \"type\": \"mq\",\n            \"host\": \"192.168.0.10\",\n            \"port\": 5672,\n            \"userName\": \"guest\",\n            \"passWord\": \"guest\",\n            \"exchange\": \"aiotc.exchange.message\",\n            \"routingKey\": \"\"\n        }\n    ],\n    \"gb28181Params\": {\n        \"localHostIp\": \"192.168.0.99\",\n        \"localSipId\": \"34010000002000000001\",\n        \"localPort\": 5060\n    },\n    \"gat1400Params\": {\n        \"localGatHostIp\": \"34010000002000000001\",\n        \"localGatServerId\": \"32020200002000000002\",\n        \"localGatPort\": 7100,\n        \"platform\": [\n            {\n                \"id\": \"32020200002000000001\",\n                \"ip\": \"192.168.0.99\",\n                \"port\": 7200,\n                \"username\": \"admin\",\n                \"password\": \"admin\",\n                \"extra\": {\n                    \"manufactor\": \"hik\"\n                }\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>0:成功 1:失败</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":0,\"msg\":\"success\",\"data\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/restAPI.h",
    "groupTitle": "1_System",
    "name": "PostSystemInit"
  },
  {
    "type": "POST",
    "url": "/system/login",
    "title": "1.01 登录",
    "group": "1_System",
    "version": "0.1.0",
    "description": "<p>详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passWord",
            "description": "<p>密码,用户输入后,先hash,再传输</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>服务器端生成的token,每个命令都需要在http头部的Authorization字段携带token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "validTime",
            "description": "<p>有效时间,单位:分钟,客户端需要在这个时间内重复登录获取token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n    \"userName\":\"admin\",\n    \"passWord\":\"xxxxxxxx\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>0:成功 1:失败</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":0,\"msg\":\"success\",\"data\":{\"token\":\"xxxxxxx\",\"validTime\":30}}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/restAPI.h",
    "groupTitle": "1_System",
    "name": "PostSystemLogin"
  },
  {
    "type": "POST",
    "url": "/system/logout",
    "title": "1.02 退出",
    "group": "1_System",
    "version": "0.1.0",
    "description": "<p>详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>需要携带token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n    \"userName\":\"admin\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>0:成功 1:失败</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":0,\"msg\":\"success\",\"data\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/restAPI.h",
    "groupTitle": "1_System",
    "name": "PostSystemLogout"
  },
  {
    "type": "POST",
    "url": "/system/slave/add",
    "title": "1.04 添加slave",
    "group": "1_System",
    "version": "0.1.0",
    "description": "<p>详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slaveIp",
            "description": "<p>slave机器IP地址</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "restPort",
            "description": "<p>restAPI服务端口</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "streamPort",
            "description": "<p>socket数据端口,可作为云服务端口</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "internetIp",
            "description": "<p>互联网部署时的公网IP地址</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n    \"slaveIp\":\"192.168.0.100\",\n    \"restPort\":11762,\n    \"streamPort\":11764,\n    \"internetIp\":\"8.8.8.8\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>0:成功 1:失败</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":0,\"msg\":\"success\",\"data\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/restAPI.h",
    "groupTitle": "1_System",
    "name": "PostSystemSlaveAdd"
  },
  {
    "type": "POST",
    "url": "/system/slave/del",
    "title": "1.05 删除slave",
    "group": "1_System",
    "version": "0.1.0",
    "description": "<p>详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slaveIp",
            "description": "<p>slave机器IP地址</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n    \"slaveIp\":\"192.168.0.100\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>0:成功 1:失败</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":0,\"msg\":\"success\",\"data\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/restAPI.h",
    "groupTitle": "1_System",
    "name": "PostSystemSlaveDel"
  },
  {
    "type": "POST",
    "url": "/obj/add/ehome",
    "title": "2.02 添加设备 - Ehome",
    "group": "2_Object",
    "version": "0.1.0",
    "description": "<p>详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>设备名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>设备类型</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "id",
            "description": "<p>设备ID,master支持自动分配</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subType",
            "description": "<p>数据类型,Ehome为海康设备接入互联网协议</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>设备ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n    \"name\":\"test\",\n    \"type\":\"camera\",\n    \"id\":99,\n    \"data\":{\n        \"subType\":\"ehome\",\n        \"deviceId\":\"12345678\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>0:成功 1:失败</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>设备ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":0,\"msg\":\"success\",\"data\":{\"id\":99}}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/restAPI.h",
    "groupTitle": "2_Object",
    "name": "PostObjAddEhome"
  },
  {
    "type": "POST",
    "url": "/obj/add/gat1400",
    "title": "2.03 添加设备 - gat1400",
    "group": "2_Object",
    "version": "0.1.0",
    "description": "<p>详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>设备名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>设备类型</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "id",
            "description": "<p>设备ID,master支持自动分配</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subType",
            "description": "<p>数据类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>设备Id，一般与某个像机绑定</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "mode",
            "description": "<p>0:推送模式 1:订阅模式</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "slaveIp",
            "description": "<p>推送模式时需要指定服务器IP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platformId",
            "description": "<p>对接平台ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n    \"name\":\"test\",\n    \"type\":\"camera\",\n    \"id\":99,\n    \"data\":{\n        \"subType\":\"gat1400\",\n        \"deviceId\": \"32020200002000000003\",\n        \"mode\": 0,\n        \"slaveIp\": \"192.168.0.100\",\n        \"platformId\": \"32020200002000000001\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>0:成功 1:失败</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>设备ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":0,\"msg\":\"success\",\"data\":{\"id\":99}}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/restAPI.h",
    "groupTitle": "2_Object",
    "name": "PostObjAddGat1400"
  },
  {
    "type": "POST",
    "url": "/obj/add/gb28181",
    "title": "2.05 添加设备 - gb28181",
    "group": "2_Object",
    "version": "0.1.0",
    "description": "<p>详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>设备名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>设备类型</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "id",
            "description": "<p>设备ID,master支持自动分配</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subType",
            "description": "<p>数据类型</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tcpEnable",
            "description": "<p>gb28181模式下的tcp使能, 1:tcp,0:udp</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sipId",
            "description": "<p>视频流sipId，一般与某个像机绑定</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hostSipId",
            "description": "<p>远程下级域sipId，可以同时对接多个下级域服务器</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hostIp",
            "description": "<p>远程下级域IP地址</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "hostSipPort",
            "description": "<p>远程下级域端口</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n    \"name\":\"test\",\n    \"type\":\"camera\",\n    \"id\":99,\n    \"data\":{\n        \"subType\":\"gb28181\",\n        \"tcpEnable\":0,\n        \"sipId\": \"32020200002000000003\",\n        \"hostSipId\": \"32020200002000000001\",\n        \"hostIp\": \"192.168.0.64\",\n        \"hostSipPort\": 5060\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>0:成功 1:失败</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>设备ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":0,\"msg\":\"success\",\"data\":{\"id\":99}}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/restAPI.h",
    "groupTitle": "2_Object",
    "name": "PostObjAddGb28181"
  },
  {
    "type": "POST",
    "url": "/obj/add/rtsp",
    "title": "2.04 添加设备 - rtsp",
    "group": "2_Object",
    "version": "0.1.0",
    "description": "<p>详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>设备名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>设备类型</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "id",
            "description": "<p>设备ID,master支持自动分配</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subType",
            "description": "<p>数据类型</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tcpEnable",
            "description": "<p>rtsp模式下的tcp使能, 1:tcp,0:udp</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>rtsp视频流地址</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n    \"name\":\"test\",\n    \"type\":\"camera\",\n    \"id\":99,\n    \"data\":{\n        \"subType\":\"rtsp\",\n        \"tcpEnable\":0,\n        \"url\":\"rtsp://192.168.0.64/h264/ch1/main/av_stream\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>0:成功 1:失败</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>设备ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":0,\"msg\":\"success\",\"data\":{\"id\":99}}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/restAPI.h",
    "groupTitle": "2_Object",
    "name": "PostObjAddRtsp"
  },
  {
    "type": "POST",
    "url": "/obj/add/sdk",
    "title": "2.06 添加设备 - 厂家sdk",
    "group": "2_Object",
    "version": "0.1.0",
    "description": "<p>详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>设备名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>设备类型</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "id",
            "description": "<p>设备ID,master支持自动分配</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subType",
            "description": "<p>像机类型,海康,大华等各厂家通过subType不同可以共用此接口,目前支持hikSdk/dhSdk</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": "<p>IP地址</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "port",
            "description": "<p>端口</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passWord",
            "description": "<p>密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n    \"name\":\"test\",\n    \"type\":\"camera\",\n    \"id\":99,\n    \"data\":{\n        \"subType\":\"hikSdk\",\n        \"ip\":\"192.168.0.64\",\n        \"port\":8000,\n        \"userName\":\"admin\",\n        \"passWord\":\"admin\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>0:成功 1:失败</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>设备ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":0,\"msg\":\"success\",\"data\":{\"id\":99}}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/restAPI.h",
    "groupTitle": "2_Object",
    "name": "PostObjAddSdk"
  },
  {
    "type": "POST",
    "url": "/obj/add/tcp",
    "title": "2.01 添加设备 - tcp",
    "group": "2_Object",
    "version": "0.1.0",
    "description": "<p>详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>设备名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>设备类型</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "id",
            "description": "<p>设备ID,master支持自动分配</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subType",
            "description": "<p>数据类型,tcp类型可以支持局域网设备接入互联网云平台</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>tcp接入可以兼容多种类型，典型如streamSdk</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sn",
            "description": "<p>设备序列号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n    \"name\":\"test\",\n    \"type\":\"camera\",\n    \"id\":99,\n    \"data\":{\n        \"subType\":\"tcp\",\n        \"source\": \"streamSdk\",\n        \"sn\":\"12345678\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>0:成功 1:失败</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>设备ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":0,\"msg\":\"success\",\"data\":{\"id\":99}}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/restAPI.h",
    "groupTitle": "2_Object",
    "name": "PostObjAddTcp"
  },
  {
    "type": "POST",
    "url": "/obj/capture/start",
    "title": "2.14 开始抓拍",
    "group": "2_Object",
    "version": "0.1.0",
    "description": "<p>详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>设备ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n    \"id\":99\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>0:成功 1:失败</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":0,\"msg\":\"success\",\"data\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/restAPI.h",
    "groupTitle": "2_Object",
    "name": "PostObjCaptureStart"
  },
  {
    "type": "POST",
    "url": "/obj/capture/stop",
    "title": "2.15 停止抓拍",
    "group": "2_Object",
    "version": "0.1.0",
    "description": "<p>详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>设备ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n    \"id\":99\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>0:成功 1:失败</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":0,\"msg\":\"success\",\"data\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/restAPI.h",
    "groupTitle": "2_Object",
    "name": "PostObjCaptureStop"
  },
  {
    "type": "POST",
    "url": "/obj/del",
    "title": "2.16 删除设备",
    "group": "2_Object",
    "version": "0.1.0",
    "description": "<p>详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>设备ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n    \"id\":99\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>0:成功 1:失败</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":0,\"msg\":\"success\",\"data\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/restAPI.h",
    "groupTitle": "2_Object",
    "name": "PostObjDel"
  },
  {
    "type": "POST",
    "url": "/obj/preview/start",
    "title": "2.09 开始视频预览",
    "group": "2_Object",
    "version": "0.1.0",
    "description": "<p>详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>设备ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>预览模式,支持hls,http-flv,ws等</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>设备类型为camera,才支持视频预览,此命令依赖/obj/stream/start</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n    \"id\": 99,\n    \"type\": \"hls\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>0:成功 1:失败</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":0,\"msg\":\"success\",\"data\":{\"url\":\"http://192.168.0.10:8080/m3u8/stream9/play.m3u8\"}}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/restAPI.h",
    "groupTitle": "2_Object",
    "name": "PostObjPreviewStart"
  },
  {
    "type": "POST",
    "url": "/obj/preview/stop",
    "title": "2.10 停止视频预览",
    "group": "2_Object",
    "version": "0.1.0",
    "description": "<p>详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>设备ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n    \"id\":99\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>0:成功 1:失败</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":0,\"msg\":\"success\",\"data\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/restAPI.h",
    "groupTitle": "2_Object",
    "name": "PostObjPreviewStop"
  },
  {
    "type": "POST",
    "url": "/obj/record/play",
    "title": "2.13 录像回放",
    "group": "2_Object",
    "version": "0.1.0",
    "description": "<p>详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>设备ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "startTimeStamp",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "stopTimeStamp",
            "description": "<p>结束时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n    \"id\":99,\n    \"startTimeStamp\":1582201220,\n    \"stopTimeStamp\":1582221220\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>0:成功 1:失败</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>录像回放类型，一般为MP4，也可能为其他，比如hls</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "playUrl",
            "description": "<p>播放列表</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": true,
            "field": "index",
            "description": "<p>只在type为mp4时有效，索引号</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": true,
            "field": "start",
            "description": "<p>只在type为mp4时有效，表示此文件开始时间</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": true,
            "field": "len",
            "description": "<p>只在type为mp4时有效，表示文件时间长度</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>播放地址，根据type不同，客户端需要选择不同播放方案</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n    \"code\":0,\n    \"msg\":\"success\",\n    \"data\":{\n        \"type\":\"mp4\",\n        \"playUrl\":[\n            {\n                \"index\": 1,\n                \"start\": 1582201220,\n                \"len\": 600,\n                \"url\": \"http://xxxx:xxxx/xxxx.mp4\"\n            },\n            {\n                \"index\": 2,\n                \"start\": 1582201820,\n                \"len\": 600,\n                \"url\": \"http://xxxx:xxxx/xxxx.mp4\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/restAPI.h",
    "groupTitle": "2_Object",
    "name": "PostObjRecordPlay"
  },
  {
    "type": "POST",
    "url": "/obj/record/start",
    "title": "2.11 开始录像",
    "group": "2_Object",
    "version": "0.1.0",
    "description": "<p>详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>设备ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>设备类型为camera,才支持视频录像,此命令依赖/obj/stream/start</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n    \"id\":99\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>0:成功 1:失败</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":0,\"msg\":\"success\",\"data\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/restAPI.h",
    "groupTitle": "2_Object",
    "name": "PostObjRecordStart"
  },
  {
    "type": "POST",
    "url": "/obj/record/stop",
    "title": "2.12 停止录像",
    "group": "2_Object",
    "version": "0.1.0",
    "description": "<p>详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>设备ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n    \"id\":99\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>0:成功 1:失败</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":0,\"msg\":\"success\",\"data\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/restAPI.h",
    "groupTitle": "2_Object",
    "name": "PostObjRecordStop"
  },
  {
    "type": "POST",
    "url": "/obj/stream/start",
    "title": "2.07 开始拉流",
    "group": "2_Object",
    "version": "0.1.0",
    "description": "<p>详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>设备ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n    \"id\":99\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>0:成功 1:失败</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":0,\"msg\":\"success\",\"data\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/restAPI.h",
    "groupTitle": "2_Object",
    "name": "PostObjStreamStart"
  },
  {
    "type": "POST",
    "url": "/obj/stream/stop",
    "title": "2.08 停止拉流",
    "group": "2_Object",
    "version": "0.1.0",
    "description": "<p>详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>设备ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n    \"id\":99\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>0:成功 1:失败</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":0,\"msg\":\"success\",\"data\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/restAPI.h",
    "groupTitle": "2_Object",
    "name": "PostObjStreamStop"
  },
  {
    "type": "POST",
    "url": "/task/start",
    "title": "3.01 开始任务",
    "group": "3_Task",
    "version": "0.1.0",
    "description": "<p>详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>设备ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alg",
            "description": "<p>每个设备可以启动多个算法，详见[算法支持]接口</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>此命令依赖/obj/stream/start或/obj/capture/start</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n    \"id\":999,\n    \"alg\":\"faceCapture\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>0:成功 1:失败</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":0,\"msg\":\"success\",\"data\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/restAPI.h",
    "groupTitle": "3_Task",
    "name": "PostTaskStart"
  },
  {
    "type": "POST",
    "url": "/task/stop",
    "title": "3.02 停止任务",
    "group": "3_Task",
    "version": "0.1.0",
    "description": "<p>详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>设备ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alg",
            "description": "<p>算法名称</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n    \"id\":999,\n    \"alg\":\"faceCapture\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>0:成功 1:失败</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":0,\"msg\":\"success\",\"data\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/restAPI.h",
    "groupTitle": "3_Task",
    "name": "PostTaskStop"
  },
  {
    "type": "GET",
    "url": "/alg/support",
    "title": "4.01 算法支持",
    "group": "4_Alg",
    "version": "0.1.0",
    "description": "<p>详细描述</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>0:成功 1:失败</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "alg",
            "description": "<p>支持的算法种类</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "faceCapture",
            "description": "<p>人脸抓拍,只适合视频流输入设备</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "vehCapture",
            "description": "<p>车辆抓拍,只适合视频流输入设备</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "personAttr",
            "description": "<p>行人属性提取,年龄、性别、眼镜、衣服颜色等,输入为抓拍图片</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "vehAttr",
            "description": "<p>车辆属性提取,车型、颜色等,输入为抓拍图片</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "plateRecg",
            "description": "<p>车牌识别,输入为视频流或抓拍图片</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "yolo",
            "description": "<p>开源算法集成</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "openpose",
            "description": "<p>开源算法集成</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n    \"code\":0,\n    \"msg\":\"success\",\n    \"data\":{\n        \"alg\":[\"faceCapture\",\"vehCapture\",\"personAttr\",\"vehAttr\",\"plateRecg\",\"yolo\",\"openpose\"]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/restAPI.h",
    "groupTitle": "4_Alg",
    "name": "GetAlgSupport"
  },
  {
    "type": "OUT",
    "url": "/common",
    "title": "5.01 任务结果消息",
    "group": "5_Output",
    "version": "0.1.0",
    "description": "<p>详细描述</p>",
    "success": {
      "examples": [
        {
          "title": "输出样例:",
          "content": "{\n    \"msgType\": \"common\",\n    \"data\":{\n        \"id\":999,\n        \"timeStamp\": 99999999,\n        \"sceneImg\": {\n            \"url\": \"http://xxxx:xxxx/scene.jpg\"\n        },\n        \"person\":[{\n            \"face\":{\n                \"url\": \"http://xxxx:xxxx/face.jpg\"\n                \"rect\": {\"x\":0.001,\"y\":0.001,\"w\":0.012,\"h\":0.033}\n                \"quality\": 0.9\n            },\n            \"body\":{\n                \"url\": \"http://xxxx:xxxx/body.jpg\"\n                \"rect\": {\"x\":0.001,\"y\":0.001,\"w\":0.012,\"h\":0.033}\n            },\n            \"property\":{\n                \"gender\":{\"value\":\"man\",\"confidence\":99.99},\n                \"age\":{\"value\":33,\"confidence\":99.99}\n            }\n        }],\n        \"veh\":[{\n            \"plate\":{\n                \"color\":\"blue\",\n                \"plateNo\":\"苏A99999\",\n                \"url\": \"http://xxxx:xxxx/plate.jpg\"\n                \"rect\": {\"x\":0.001,\"y\":0.001,\"w\":0.012,\"h\":0.033},\n            },\n            \"body\":{\n                \"url\": \"http://xxxx:xxxx/body.jpg\"\n                \"rect\": {\"x\":0.001,\"y\":0.001,\"w\":0.012,\"h\":0.033}\n            },\n            \"property\":{\n                \"color\":{\"value\":\"blue\",\"confidence\":99.99},\n                \"brand\":{\"value\":\"宝马-宝马X5-2014\",\"confidence\":99.99}\n            }\n        }]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/restAPI.h",
    "groupTitle": "5_Output",
    "name": "OutCommon"
  },
  {
    "type": "OUT",
    "url": "/status",
    "title": "5.02 设备状态消息",
    "group": "5_Output",
    "version": "0.1.0",
    "description": "<p>详细描述</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>设备ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>1:在线,0:离线</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "stream",
            "description": "<p>1:开始拉流,0:停止拉流</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "preview",
            "description": "<p>1:开始预览,0:停止预览</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "capture",
            "description": "<p>1:开始抓拍,0:停止抓拍</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "record",
            "description": "<p>1:开启录像,0:停止录像</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "输出样例:",
          "content": "{\n    \"msgType\": \"objStatus\",\n    \"data\":{\n        \"obj\":[\n            {\n                \"id\": 999,\n                \"status\" : 1,\n                \"stream\" : 1,\n                \"preview\" : 1,\n                \"capture\" : 1,\n                \"record\" : 1\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/restAPI.h",
    "groupTitle": "5_Output",
    "name": "OutStatus"
  }
] });

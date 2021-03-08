module.exports = {

  test_settings: {
    default: {
      screenshots: {
        enabled: true,
        path: '/screenshots'
      }
    }
  },

    "src_folders" : ["tests"],
    "page_objects_path" : ["pages"],
  
    "webdriver" : {
      "start_process": true,
      "server_path": "C:\\Windows\\chromedriver",
      "port": 9515
    },
  
    "test_settings" : {
      "default" : {
        "desiredCapabilities": {
          "browserName": "chrome"
        }
      }
    }
    
  };
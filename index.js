function getLocation(){                     
    if(navigator.geolocation){            
        //浏览器支持geolocation            
        navigator.geolocation.getCurrentPosition(showPosition); 
    }          
} 
function showPosition(position){

    var map = new BMapGL.Map('container');// 创建Map实例
    // 经度        
    var longitude =position.coords.longitude-0.0864;        
    // 纬度        
    var latitude = position.coords.latitude+0.0151;
    map.centerAndZoom(new BMapGL.Point(longitude, latitude), 20); // 初始化地图,设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放

    var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
    map.addControl(scaleCtrl);
    //设置中心点
    var point = new BMapGL.Point(longitude, latitude);
    map.setCenter(point); // 设置地图中心点
    //向地图中添加marker
    // 创建点标记
    var marker1 = new BMapGL.Marker(new BMapGL.Point(longitude, latitude));
    // 在地图上添加点标记
    map.addOverlay(marker1);

    // alert("经度:" + longitude + ", 纬度:" + latitude);
} 
window.onload = getLocation;



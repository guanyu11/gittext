// body, button, input, select, textarea, h1, h2, h3, h4, h5, h6 {
//     font-size: 12px;
//     font-family: 'Microsoft YaHei','宋体',Verdana, Arial, sans-serif;

export default class Floor {
    constructor(data) {
        this.data = data;
        // this.floor = data.floors;
        this.leftimg = data.leftimg;
        this.rightimg = data.rightimg;
        this.elem = this.createFloor();
    }
    //整楼
    createFloor() {
        if (this.Floor) return this.elem;
        var floor = document.createElement("div");
        Object.assign(floor.style, {
            margin: "0 auto",
            width: "1100px",
            marginBottom: "55px",
            
        })
        this.createFloorTip(floor);
        this.createFloorBottom(floor);

        return floor;
    }

    //楼顶
    createFloorTip(parent) {
        var tip = document.createElement("div");
        Object.assign(tip.style, {
            height: 40 + "px",
            // width: 900 + "px",
            // backgroundColor: "pink",
            fontSize: 24 + "px",
            marginRight: 5 + "px",
            lineHeight: 40 + "px",
            fontWeight: "bold",
            borderBottom: "2px solid #333"
            // borderBottom:"2px solid #333",
            // borderBottom:"2px solid pink",

        })
        var louceng = document.createElement("span");
        louceng.textContent = "1F";
        var louming = document.createElement("span");

        louming.textContent = "水瓶/水杯";
        tip.appendChild(louceng);
        tip.appendChild(louming);
        parent.appendChild(tip);
        // console.log("aaa")

    }
    //楼底（左图右li）
    createFloorBottom(parent) {
        let bottom = document.createElement("div");
        Object.assign(bottom.style, {
            height: 607 + "px",
            // width:900+"px",
            // backgroundColor: "black"
        })
        this.createFloorLeft(bottom);
        this.createFloorRight(bottom);
        parent.appendChild(bottom);
        // console.log("aaa")

    }
    //楼底（左图）
    createFloorLeft(parent) {
        let left = document.createElement("img");
        left.src = this.leftimg.src;
        Object.assign(left.style, {
            float: "left",
            width: 405 + "px",
            height: 644 + "px",
        })
        parent.appendChild(left);
        // console.log("aaa")

    }
    //楼底（右div）
    createFloorRight(parent) {
        let right = document.createElement("div");
        Object.assign(right.style, {
            padding: 0,
            margin: 0,
            float: "left",
            // height: 500 + "px",
            width: 693 + "px",
            // backgroundColor: "red"

        })
        let ul = document.createElement("ul");
        Object.assign(ul.style, {
            // float:"left",
            // height:693+"px",
            // width:500+"px",
            // backgroundColor:"red"
            listStyle: "none",
            padding: 0,
            margin: 0,

        })

        for (let i = 0; i < this.rightimg.length; i++) {
            //创建单个商品的li
            let li = document.createElement("li");
            Object.assign(li.style, {
                float: "left",
                width: "229px",
                height:" auto",
                border: " 1px solid #ede7e7",
                borderLeft: "none",
                borderTop: "none",
                textAlign: "center",
                paddingBottom: 10 + "px",
                // paddingLeft: "17px",

            })
            let a1 = document.createElement("a");
            //添加a的href 用a包裹商品图片
            // a1.href=
            var img = document.createElement("img");
            img.src = this.rightimg[i].src;
            Object.assign(img.style, {
                width: "200px",
                height: "200px",
                marginBottom: "15px",
                marginTop: "15px"

            })
            a1.appendChild(img);
            // let p1=document.createElement("p");
            // Object.assign(p1.style,{



            // })

            let a2 = document.createElement("a");
            Object.assign(a2.style, {
                display: "inline-block",
                fontSize: 13 + "px",
                textAlign: " left",
                width: "195px",
                // width: "200px",
                // height: "200px",
                marginBottom: "5px",
                marginTop: "15px",
                lineHeight: "1.4",
                padding: 0,
                margin: 0,

            })
            //a2.href=
            a2.textContent = this.rightimg[i].name;
            // p1.appendChild(a2)
            li.appendChild(a1);
            li.appendChild(a2);
            //建议零售价
            let p1 = document.createElement("p");
            Object.assign(p1.style, {
                width: "195px",
                padding: 0,
                margin: 0,
                lineHeight: "20px",
                fontSize: "12px",
                color: "#999",
                paddingLeft: "17px",
                paddingTop: "1px",

                textAlign:"left"
            })
            p1.textContent = "建议零售价";
            let span1 = document.createElement("span");
            Object.assign(span1.style, {
                paddingLeft: "15px",
            })
            span1.textContent = "￥" + Number(this.rightimg[i].suggestedPrice).toFixed(2);
            p1.appendChild(span1);
            let p2 = document.createElement("p");
            Object.assign(p2.style, {
                width: "195px",
                padding: 0,
                margin: 0,
                fontSize: "12px",
                color: "#999",
                paddingLeft: "17px",
                // paddingBotton: "2px",
                textAlign:"left",
            })
            p2.innerHTML = "售&emsp;&emsp;&emsp;价";
            let span2 = document.createElement("span");
            Object.assign(span2.style, {
                color:"#333",
                paddingLeft: "15px",
                fontWeight: "bold",
                fontSize: "15px"
            })
            span2.textContent = "￥" + Number(this.rightimg[i].currentPrice).toFixed(2);
            p2.appendChild(span2);
            li.appendChild(p1);
            li.appendChild(p2);



            ul.appendChild(li);
        }
        right.appendChild(ul);
        parent.appendChild(right);
        console.log("aaa")

    }
    //楼底（右div 里的li）
    appendto(parent) {
        parent.appendChild(this.elem)
    }

}
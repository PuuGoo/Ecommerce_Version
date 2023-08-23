// jshint esversion:6
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import {fileURLToPath} from "url";
import {getDate,getDay} from "./views/date.js";
import mongoose from "mongoose";
import __ from "lodash";

main().catch(err => console.log(err));

async function main() {

    const app = express();
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // let items = ["Buy Food", "Cook Food", "Eat Food"];
    // let WorkItem = [];
    // let StudyItem = [];

    app.set('view engine', 'ejs'); //Dòng mã này cho ứng dụng của chúng ta biết ứng dụng được tạo bằng Express để sử dụng EJS làm công cụ xem của nó

    app.use(express.static(__dirname + "/public"));

    app.use(bodyParser.urlencoded({extended: true}));

    await mongoose.connect("mongodb://127.0.0.1:27017/todolistDB");
    console.log("Connected");

    const itemsSchema = {
        name: String
    };

    const Item = mongoose.model("Item", itemsSchema);

    const item1 = new Item({
        name: "Buy Food"
    });

    const item2 = new Item({
        name: "Cook Food"
    });

    const item3 = new Item({
        name: "Eat Food"
    });

    const defaultItem = [item1, item2, item3];


    const listSchema = {
        name: String,
        items: [itemsSchema]
    }

    const List = mongoose.model("List", listSchema);

    app.get("/", (req, res) => {
        let day = getDate();

        Item.find()
            .then(function (foundItems) {
                if (foundItems.length === 0) {
                    Item.insertMany(defaultItem)
                        .then(function () {
                            console.log("Successfully saved default items in DB.");
                        })
                        .catch(function (err) {
                            console.log(err);
                        });
                        res.redirect("/");
                } else {
                    res.render("list", {listTitle: day, newListItem: foundItems}); //render(kết xuất) 1 tệp được gọi là danh sách(list) và chúng ta sẽ chuyển tệp đó thành 1 biến có tên là kindOfDay và giá trị sẽ bằng bất kỳ giá trị nào của biến hiện tại của chúng ta là ngày.Chúng ta đang tạo phản hồi của mình bằng cách render  1 tiệp có tên là List(trong thư mục views) xem nó có phải phần mở rộng không?. Sau đó vào file List -> truyền một biến duy nhất kindOfDay và giá trí cung cấp cho nó là giá trị biến day.
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    });

    app.get("/:customListName", function(req,res){
        const customListName = __.capitalize(req.params.customListName);
        const list = new List({
            name: customListName,
            items: defaultItem
        }); 
        List.findOne({name: customListName})
        .then(function(foundList){
            if(!foundList){
                list.save();
                res.redirect("/" + customListName);
            } else {
                res.render("list",{listTitle: foundList.name, newListItem: foundList.items});
            }
        })
        .catch(function(err){
            console.log(err);
        });
        

    });

    app.get("/about", (req, res) => {
        res.render("about");
    });

    app.post("/", (req, res) => {
        const day = getDate();

        const itemName = req.body.newItem;
        const listName = req.body.list;
        const item = new Item({
            name: itemName
        });

        if(listName === day){
            item.save();
            res.redirect("/");
        } else {
            List.findOne({name: listName})
            .then(function(foundList){
                foundList.items.push(item);
                foundList.save();
                res.redirect("/" + listName);
            })
            .catch(function(err){
                console.log(err);
            });
        }


    });

    app.post("/delete", function(req, res){
        const day = getDate();
        const checkedItemId = req.body.checkbox;
        const listName = req.body.listName;

        if(listName === day){
            Item.findByIdAndRemove(checkedItemId)
            .then(function(foundItems){
                console.log("Successfully deleted checked item.");
                res.redirect("/");
            })
            .catch(function(err){
                console.log(err);
            });
        } else {

            List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}})
            .then(function(foundList){
                console.log("Successfully deleted checked item.");
                var i;
                if(foundList.items.length === 1){
                    defaultItem.forEach(function(a){
                        foundList.items.push(a);
                    });
                    
                    foundList.save();
                }
                res.redirect("/"+ listName);
            })
            .catch(function(err){
                console.log(err);
            });


        }


    });
    app.listen(process.env.PORT || 3000, () => {
        console.log("Server is starting on port 3000");
    });

}

// route home xoa muc default item thi ko tu dong xuat hien tro lai
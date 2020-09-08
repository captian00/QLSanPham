import React, { Component } from "react";
import callAPI from "./../../utils/callAPI";
import { Link } from "react-router-dom";
class ProductAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      chkbStatus: "",
    };
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };
  onSave = (event) => {
    var { txtName, txtPrice, chkbStatus } = this.state;
    var { history } = this.props;
    event.preventDefault();
    callAPI("products", "POST", {
      Name: txtName,
      Price: txtPrice,
      Status: chkbStatus,
    }).then((res) => {
      history.goBack();
    });
  };
  render() {
    var { txtName, txtPrice, chkbStatus } = this.state;
    return (
      <div className="col-xs-Name6 col-sm-Name6 col-md-Name6 col-lg-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Tên Sản Phẩm :</label>
            <input
              type="text"
              className="form-control"
              name="txtName"
              value={txtName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Giá :</label>
            <input
              type="number"
              className="form-control"
              name="txtPrice"
              value={txtPrice}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Trạng Thái :</label>

            <div className="checkbox">
              <label>
                <input
                  className="mr-10"
                  type="checkbox"
                  name="chkbStatus"
                  value={chkbStatus}
                  onChange={this.onChange}
                />
                Còn Hàng
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary mr-10">
            Submit
          </button>
          <Link to="/product-list" className="btn btn-danger">
            Quay Lại
          </Link>
        </form>
      </div>
    );
  }
}
export default ProductAction;

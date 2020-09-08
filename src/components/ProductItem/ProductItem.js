import React, { Component } from "react";
class ProductItems extends Component {
  render() {
    var { product, index } = this.props;
    var statusName = product.Status == "true" ? "Còn Hàng" : "Hết Hàng";
    var statusClass = product.Status == "false" ? "warning" : "default";
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.Name}</td>
        <td>{product.Price}</td>
        <td>
          <span className={`label label-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <button type="button" className="btn btn-success mr-10">
            Sửa
          </button>

          <button type="button" className="btn btn-danger">
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}
export default ProductItems;

import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  Row,
  Col,
  Card
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { API } from "../config/API";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from "react-bootstrap-table2-paginator";
import ModalDetailComponent from "../components/ModalDetailComponent";
import ModalFormComponent from "../components/ModalFormComponent";
import ModalDeleteComponent from "../components/ModalDeleteComponent";


const { SearchBar } = Search;

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];
const TableComponent = () => {

  const [dataUser, setDataUser] = useState([])
  const [modalShowDetail, setModalShowDetail] = useState(false);
  const [modalShowForm, setModalShowForm] = useState(false);
  const [modalShowDelete, setModalShowDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [dataById, setDataById] = useState([]);


  useEffect(() => {
    const getData = async () => {
      try {
        const response = await API.get("/users.json?key=10086d00");
        setDataUser(response.data)
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    ip_address: "",
  })

  const handleChange = (event) => {
    if(isEdit === true) {
      setDataById({
        ...dataById,
        [event.target.name]: event.target.value
      });
    } else {
      setForm({
        ...form,
        [event.target.name]: event.target.value
      })
    }
  };

  const handleClickDetail = (id, dataById) => {
    setModalShowDetail(true)
    setDataById(dataById)
  }

  const handleClickForm = (id, dataById) => {
    setModalShowForm(true)
    setDataById(dataById)
    setIsEdit(true)
  }

  const handleClickDelete = (id, dataById) => {
    setModalShowDelete(true)
    setDataById(dataById)
  }


  const handleClickFormAdd = () => {
    setModalShowForm(true)
    setIsEdit(false)
  }

  const handleClose = () => {
    setModalShowForm(false)
    setForm({
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      ip_address: "",
    })
  }
  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return { width: "5%" };
      },
    },
    {
      dataField: "first_name",
      text: "First Name",
      sort: true,
      headerStyle: () => {
        return { width: "10%" };
      },
    },
    {
      dataField: "last_name",
      text: "Last Name",
      sort: true,
      headerStyle: () => {
        return { width: "10%" };
      },
    },
    {
      dataField: "email",
      text: "Email",
      sort: true,
      headerStyle: () => {
        return { width: "20%" };
      },
    },
    {
      dataField: "gender",
      text: "Gender",
      sort: true,
      headerStyle: () => {
        return { width: "10%" };
      },
    },
    {
      dataField: "ip_address",
      text: "Ip Address",
      sort: true,
      headerStyle: () => {
        return { width: "15%" };
      },
    },
    {
      dataField: "link",
      text: "Action",
      formatter: (rowContent, row) => {
        return (
          <div>
            <Container>
              <Row>
                <Col>
                  <Link to="#">
                    <Button variant="info" onClick={() => handleClickDetail(row.id, row)}>
                      Detail
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <Link to="#">
                    <Button variant="warning" onClick={() => handleClickForm(row.id, row)}>
                      Update
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <Link to="#">
                    <Button variant="danger" onClick={() => handleClickDelete(row.id, row)}>
                      Delete
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </div>
        );
      },
    },
  ];
  
  const options = {
    paginationSize: 9,
    pageStartIndex: 1,
    firstPageText: false,
    prePageText: "<",
    nextPageText: ">",
    lastPageText: false,
    showTotal: false,
    paginationTotalRenderer: false,
    disablePageTitle: true,
    sizePerPageList: false,
    paginationPosition: 'top'
  };

  return (
    <div>
      <Container>
        <Card className="card-table py-5 px-5 mb-5">
        {dataUser ? (
            <ToolkitProvider
              keyField="id"
              data={dataUser}
              columns={columns}
              defaultSorted={defaultSorted}
              search={ {
                srText: 'search something here'
              } }
            >
              {(props) => (
                <div>
                  <Row style={{ marginBottom: 20 }}>
                    <Col>
                      <SearchBar
                        {...props.searchProps}
                        placeholder="Search ..."
                        srText=''
                      />
                    </Col>
                    <Col className="d-flex flex-row-reverse">
                      <Link to="#">
                        <Button variant="success" className="px-4" onClick={() => handleClickFormAdd()}>
                          Add
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                  <BootstrapTable
                    {...props.baseProps}
                    pagination={paginationFactory(options)}
                  />
                </div>
              )}
            </ToolkitProvider>
          ) : (
            <h4 style={{ textAlign : 'center'}}> Data Not Found</h4>
          )}
        </Card>
      </Container>
      <ModalDetailComponent
        data={dataById}
        show={modalShowDetail}
        onHide={() => setModalShowDetail(false)}
      />
      <ModalFormComponent
        form={form}
        data={dataById}
        isEdit={isEdit}
        handleChange={handleChange}
        show={modalShowForm}
        onHide={handleClose}
        setModalShowForm={setModalShowForm}
      />
      <ModalDeleteComponent
        data={dataById}
        show={modalShowDelete}
        onHide={() => setModalShowDelete(false)}
      />
    </div>
  )
}


export default TableComponent;

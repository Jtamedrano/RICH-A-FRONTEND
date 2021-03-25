import { Button, Input, Select, Table } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import Modal from "antd/lib/modal/Modal";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addAdmin, deleteSub, getSubscribers } from "../../../../firebase";

const MainHomeView = (props) => {
  const admin = useSelector((state) => state.admin.admin);
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newAdmin, setNewAdmin] = useState({
    name: "",
    username: "",
    password: "",
    role: "Assistant",
  });
  const history = useHistory();

  useEffect(() => {
    if (!admin.name) {
      history.replace("/admin");
    }

    getData();
  }, [admin, history]);

  const handleModalClose = () => {
    setVisible(false);
  };

  const getData = () => {
    getSubscribers()
      .get()
      .then((docSnapshots) => {
        let data = [];
        docSnapshots.forEach(async (doc) => {
          let item = doc.data();
          for (const element in item) {
            if (item[element] === "") {
              item = { ...item, [element]: "-" };
            }
          }
          data.push({
            ...item,
            name: `${item.firstName} ${item.lastName}`,
            key: `row-${item.id}`,
            ref: doc.ref,
          });
        });
        setData(data);
      });
  };

  const handleDelete = async (id, eId) => {
    await deleteSub(id).then((res) => {
      if (res) {
        setData(data.filter((e) => e.id !== eId));
      }
    });
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    { title: "name", dataIndex: "name", key: "name" },
    { title: "email", dataIndex: "email", key: "email" },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (props) => (
        <Button onClick={(e) => handleDelete(props.ref.id, props.id)}>
          Delete
        </Button>
      ),
    },
  ];

  const download = (data) => {
    const blob = new Blob([data], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", `sub-list-${Date.now()}.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const objectToCSV = (data) => {
    let info = [];
    for (const item of data) {
      info = [
        ...info,
        {
          id: item.id,
          firstName: item.firstName,
          lastName: item.lastName,
          email: item.email,
        },
      ];
    }
    const csvRows = [];

    // Get Headers
    const headers = Object.keys(info[0]);
    csvRows.push(headers.join(","));

    // Loop over rows
    for (const row of info) {
      const newRow = Object.values(row)
        .map((value) => {
          const escaped = value.replace(/"/g, '\\"');
          return `"${escaped}"`;
        })
        .join(",");
      csvRows.push(newRow);
    }

    // form escaped comma seperated values
    return csvRows.join("\n");
  };

  const downloadData = async () => {
    const csvData = objectToCSV(data);
    download(csvData);
  };

  const changeAdmin = (e) => {
    if (typeof e === "string") {
      setNewAdmin({ ...newAdmin, role: e });
      return;
    }
    setNewAdmin({ ...newAdmin, [e.target.name]: e.target.value });
  };

  return (
    <div className="adminContainer">
      <header>
        <h1>Hello {admin.name}</h1>
        <ButtonGroup>
          {admin.role === "Owner" && (
            <Button
              onClick={() => {
                setVisible(true);
              }}
            >
              Add Admin
            </Button>
          )}
          <Button
            onClick={() => {
              history.push("/admin/account");
            }}
          >
            Account
          </Button>
        </ButtonGroup>
      </header>
      <main>
        <section>
          <h2>Subscriber Data</h2>
        </section>
        <Table
          className="subscriberTable"
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 50 }}
        />
        <Button onClick={downloadData}>Download Data</Button>
      </main>
      <Modal
        title="Add Admin"
        visible={visible}
        onOk={async () => {
          setLoading(true);
          await addAdmin(newAdmin).then((res) => {
            if (res) {
              setLoading(false);
              setVisible(false);
            }
          });
        }}
        confirmLoading={loading}
        onCancel={handleModalClose}
      >
        <form
          onSubmit={async (e) => {
            e.preventDefault();
          }}
        >
          <div>
            <label>Name</label>
            <Input name="name" value={newAdmin.name} onChange={changeAdmin} />
          </div>
          <div>
            <label>Username</label>
            <Input
              name="username"
              value={newAdmin.username}
              onChange={changeAdmin}
            />
          </div>
          <div>
            <label>Password</label>
            <Input
              type="password"
              name="password"
              value={newAdmin.password}
              onChange={changeAdmin}
            />
          </div>
          <div>
            <label>Role</label>
            <br />
            <Select
              name="role"
              value={newAdmin.role}
              onChange={(e) =>
                changeAdmin({ target: { value: e, name: "role" } })
              }
            >
              <Select.Option value="Assistant">Assistant</Select.Option>
              <Select.Option value="Owner">Owner</Select.Option>
            </Select>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default MainHomeView;

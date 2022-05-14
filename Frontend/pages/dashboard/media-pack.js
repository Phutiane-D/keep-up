import router from "next/router";
import { parseCookies } from "nookies";

import React, { useState, useEffect } from "react";
import { getAll, add, update, remove } from "../../services/mediaService";
import { useAppContext } from "../../context/index";
import Dashboard from "../../components/dashboard/Dashboard";
import Table from "../../components/dashboard/Table";
import TableSkeleton from "../../components/TableSkeleton";

const columns = [
  {
    field: "id",
    title: "ID",
    width: 70,
    initialEditValue: Date.now(),
    editable: "never",
  },
  {
    field: "title",
    title: "Title",
    width: 200,
  },
  {
    field: "link",
    title: "Link",
    width: 200,
  },
  {
    field: "description",
    title: "Description",
    width: 250,
  },
  {
    field: "suburb",
    title: "Suburb",
    width: 130,
    lookup: { sandown: "Sandown", bramley: "Bramley" },
  },

];

export default function media(){

  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(false);

  const { checkSession } = useAppContext();

  useEffect(() => {
    const cookies = parseCookies();
    if (
      Object.keys(cookies).length !== 0 &&
      cookies.constructor === Object &&
      cookies.token
    ) {
      checkSession();
    } else {
      router.push("/dashboard/signin");
    }
    (async () => {
      setLoading(true);
      setMedia(await getAll());
      setLoading(false);
    })();
  }, []);

  const handleAddMedia = (media) => (async () => add(media))();
  const handleUpdateMedia = (media) => (async () => update(media))();
  const handleRemoveMedia = (mediaId) => (async () => remove(mediaId))();

  if (loading) {
    return (
      <Dashboard>
        <TableSkeleton />
      </Dashboard>
    );
  } else {
    return (
      <Dashboard>
        <Table
          columns={columns}
          data={media}
          title={"Media-Pack"}
          setData={setMedia}
          deleteItem={handleRemoveMedia}
          addItem={handleAddMedia}
          updateItem={handleUpdateMedia}
        />
      </Dashboard>
    );
  }
}

<FlatList
  contentContainerStyle={styles.container}
  ListHeaderComponent={{/* Your Header Component */ }}
  ListFooterComponent={{/* Your Footer Component */ }}
  scrollEventThrottle={250}
  data={data}
  keyExtractor={(item) => '' + item._id}
  refreshControl={
    <RefreshControl
      refreshing={refreshing}
      onRefresh={() => fetchMessages()}
    />
  }
  renderItem={({ item, index }) => {
    let { template } = item;
    return (
      <>
        {template === 'rate' // separate template for rate messages
          ? <ItemRate
            key={index}
            item={item}
            inboxType={inboxType}
          />
          : // default message item component
          <Item
            key={index}
            item={item}
            inboxType={inboxType}
          />
        }
      </>
    )
  }}
/>
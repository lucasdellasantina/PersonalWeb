
  // Initialize the agent on page load.
  const fpPromise = import('https://dellasantina.com.ar/ihisjlXogwrz2gJn/kqxI5JGMyxqFKOWX?apiKey=SzfYfum5x0X6FjxrCYhC')
    .then(FingerprintJS => FingerprintJS.load({
      endpoint: [
        "https://dellasantina.com.ar/ihisjlXogwrz2gJn/ZyfZzFTV5VMGwQ67",
        FingerprintJS.defaultEndpoint
      ]
    }))

  // Get the visitorId when you need it.
  fpPromise
    .then(fp => fp.get())
    .then(result => {
      const visitorId = result.visitorId
      console.log(visitorId)
    })

var fs = FSAPI();

fs.AddFile("hello", function() {
    return new Date();
})

fs.Mount("/tmp/dupa");
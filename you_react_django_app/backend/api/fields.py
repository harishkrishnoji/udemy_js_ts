TranslateFields = (
    "DeviceName",
    "Platform",
    "RuleName",
    "Type",
    "OriginalSrc",
    "OriginalDst",
    "TranslateSrc",
    "TranslateDst",
)

VIPFields = (
    "Platform",
    "DeviceName",
    "VIPName",
    "SourceAddress",
    "VIPAddress",
    "VIPPort",
    "Protocol",
    "BackendSrc",
    "BackendDst",
    "BackendPort",
)

CIDR_CHOICE_ANY = (
    ("32", "/32"),
    ("31", "/31 & above"),
    ("30", "/30 & above"),
    ("29", "/29 & above"),
    ("28", "/28 & above"),
    ("27", "/27 & above"),
    ("26", "/26 & above"),
    ("25", "/25 & above"),
    ("24", "/24 & above"),
    ("23", "/23 & above"),
)

CIDR_CHOICE = (
    ("32", "/32"),
    ("31", "/31 & above"),
    ("30", "/30 & above"),
    ("29", "/29 & above"),
    ("28", "/28 & above"),
    ("27", "/27 & above"),
    ("26", "/26 & above"),
    ("25", "/25 & above"),
    ("24", "/24 & above"),
    ("23", "/23 & above"),
    ("22", "/22 & above"),
    ("21", "/21 & above"),
    ("20", "/20 & above"),
    ("19", "/19 & above"),
    ("18", "/18 & above"),
    ("17", "/17 & above"),
    ("16", "/16 & above"),
    ("8", "/8 & above"),
    ("0", "any"),
)

exclude_list = [
    "/0",
    "/1",
    "/2",
    "/3",
    "/4",
    "/5",
    "/6",
    "/7",
    "/8",
    "/9",
    "/10",
    "/11",
    "/12",
    "/13",
    "/14",
    "/15",
    "/16",
    "/17",
    "/18",
    "/19",
    "/20",
    "/21",
    "/22",
    "/23",
    "/24",
    "/25",
    "/26",
    "/27",
    "/28",
    "/29",
    "/30",
    "/31",
    "/32",
]
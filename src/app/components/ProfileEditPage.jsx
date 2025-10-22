import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileEditSchema } from "../utils/ProfileEditSchema";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import { useEditProfileMutation } from "../apis/userApi";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ButtonGroup from "@mui/material/ButtonGroup";
import { editUserInfo } from "../store/slices/userSlice";
import UserCardPage from "./UserCardPage";
export default function ProfileEditPage() {
  const currentUserInfo = useSelector((state) => state.user);
  const [editProfile, { data: userNewInfo }] = useEditProfileMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: zodResolver(profileEditSchema),
  });

  const onSubmit = async (data) => {
    try {
      const returnedRes = await editProfile(data).unwrap();
      dispatch(editUserInfo(returnedRes.user));
      toast(returnedRes.message, { position: "top-right", closeOnClick: true });
      navigate("/profile");
      console.log("here is new user info" + returnedRes.user);
    } catch (error) {
      if (error) {
        toast("Update failed: " + error.response.data.message);
      } else {
        toast("Something went wrong: " + error.message);
      }
    }
  };
  console.log(userNewInfo?.user);
  const genders = [
    {
      value: "male",
      label: "male",
    },
    {
      value: "female",
      label: "female",
    },
    {
      value: "others",
      label: "others",
    },
  ];

  return (
    <Grid container>
      <Grid size={9}>
        <Box
          component={Paper}
          elevation={11}
          sx={{
            bgcolor: "FFFF",
            mt: 0,
            pl: 1,
            borderRadius: 3,
            width: 700,
            pb: 5,
            justifyContent: "center",
            border: "3px solid #524949ff",
          }}
        >
          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <EditNoteIcon sx={{ fontSize: "4rem" }} />
            <Typography
              component="h1"
              variant="h5"
              sx={{ color: "#444444", fontWeight: "bold" }}
            >
              Edit your Profile
            </Typography>
          </Box>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1 }}
          >
            <Grid container spacing={2} padding={2}>
              <Grid size={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="first_name"
                  label="first Name"
                  name="first_name"
                  autoComplete="first_name"
                  autoFocus
                  {...register("first_name")}
                  defaultValue={currentUserInfo?.first_name ?? ""}
                />
                <Typography sx={{ color: "#ff0000" }}>
                  {errors.first_name?.message}
                </Typography>
              </Grid>
              <Grid size={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="last_name"
                  label="Last Name"
                  name="last_name"
                  autoComplete="last_name"
                  autoFocus
                  {...register("last_name")}
                  defaultValue={currentUserInfo?.last_name ?? ""}
                />
                <Typography sx={{ color: "#ff0000" }}>
                  {errors.last_name?.message}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} padding={2}>
              <Grid size={6}>
                <Controller
                  name="gender"
                  control={control}
                  defaultValue={currentUserInfo?.gender ?? ""}
                  render={({ field }) => (
                    <TextField
                      id="gender"
                      {...field}
                      select
                      fullWidth
                      label="gender"
                      defaultValue={currentUserInfo?.gender ?? ""}
                      {...register("gender")}
                      slotProps={{
                        select: {
                          native: false,
                        },
                      }}
                    >
                      {genders.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
                <Typography sx={{ color: "#ff0000" }}>
                  {errors.gender?.message}
                </Typography>
              </Grid>
              <Grid size={6}>
                <TextField
                  required
                  fullWidth
                  name="age"
                  label="Age"
                  type="text"
                  id="age"
                  autoComplete="age"
                  {...register("age")}
                  defaultValue={currentUserInfo?.age ?? ""}
                />
                <Typography sx={{ color: "#ff0000" }}>
                  {errors.age?.message}
                </Typography>
              </Grid>
            </Grid>
            <Grid size={12} padding={2}>
              <TextField
                id="about"
                label="About"
                multiline
                rows={2}
                fullWidth
                autoComplete="about"
                {...register("about")}
                defaultValue={currentUserInfo?.about ?? ""}
              />

              <Typography sx={{ color: "#ff0000" }}>
                {errors.about?.message}
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="skills"
                label="Skills"
                type="skills"
                id="skills"
                autoComplete="skills"
                {...register("skills")}
                defaultValue={currentUserInfo?.skills ?? ""}
              />
              <Typography sx={{ color: "#ff0000" }}>
                {errors.skills?.message}
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="photoUrl"
                label="Photo Image"
                name="photoUrl"
                autoComplete="photoUrl"
                autoFocus
                {...register("photoUrl")}
                defaultValue={currentUserInfo?.photoUrl ?? ""}
              />
              <Typography sx={{ color: "#ff0000" }}>
                {errors.photoUrl?.message}
              </Typography>
            </Grid>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <ButtonGroup variant="text">
                <Button
                  onClick={() => navigate(-1)}
                  sx={{ fontWeight: "bold", color: "red" }}
                >
                  Cancel
                </Button>
                <Button type="submit" sx={{ fontWeight: "bold" }}>
                  Submit
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid size={3}>
        <UserCardPage user={currentUserInfo} />
      </Grid>
    </Grid>
  );
}

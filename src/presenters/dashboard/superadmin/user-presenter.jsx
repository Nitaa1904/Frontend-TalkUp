import { useState, useEffect } from "react";
import { UserModel, UserService } from "../../../models/dashboard/superadmin/user";
import { MESSAGES } from "../utils/constants";

export const useUserPresenter = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await UserService.getUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message);
      console.error("Error loading users:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddUser = async (formData) => {
    setIsLoading(true);
    setError(null);
    try {
      const newUser = await UserService.createUser(formData);
      setUsers((prevUsers) => [...prevUsers, newUser]);
      closeModal();
      return {
        success: true,
        message: MESSAGES.SUCCESS.CREATE,
      };
    } catch (err) {
      setError(err.message);
      return {
        success: false,
        message: err.message || MESSAGES.ERROR.GENERIC,
      };
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditUser = async (id, formData) => {
    setIsLoading(true);
    setError(null);
    try {
      const updatedUser = await UserService.updateUser(id, formData);
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === id ? updatedUser : user))
      );
      return {
        success: true,
        message: MESSAGES.SUCCESS.UPDATE,
      };
    } catch (err) {
      setError(err.message);
      return {
        success: false,
        message: err.message || MESSAGES.ERROR.GENERIC,
      };
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm(MESSAGES.CONFIRM.DELETE)) {
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      await UserService.deleteUser(id);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      return {
        success: true,
        message: MESSAGES.SUCCESS.DELETE,
      };
    } catch (err) {
      setError(err.message);
      return {
        success: false,
        message: err.message || MESSAGES.ERROR.GENERIC,
      };
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewUser = (user) => {
    console.log("View user:", user);

  };

  return {
    users,
    isLoading,
    error,
    isModalOpen,
    openModal,
    closeModal,
    handleAddUser,
    handleEditUser,
    handleDeleteUser,
    handleViewUser,
    loadUsers,
  };
};